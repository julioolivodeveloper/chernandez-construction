'use client';
import { useState, useRef, useCallback } from 'react';
import { Upload, Trash2, Copy, CheckCircle2, Image as ImageIcon, Loader2, FolderOpen } from 'lucide-react';

interface UploadedFile {
  url: string;
  path: string;
  bucket: string;
  name: string;
}

const buckets = [
  { id: 'portfolio', label: 'Portfolio Projects', desc: 'Fotos de proyectos (framing, ADU, additions, etc.)' },
  { id: 'site-images', label: 'Site Images', desc: 'Imágenes generales del sitio (hero, about, etc.)' },
];

const folders: Record<string, string[]> = {
  portfolio: ['framing', 'adu', 'additions', 'remodeling', 'roofing', 'general'],
  'site-images': ['hero', 'about', 'team', 'general'],
};

export default function AdminUploadPage() {
  const [bucket, setBucket] = useState('portfolio');
  const [folder, setFolder] = useState('general');
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState<UploadedFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const uploadFiles = async (files: FileList | File[]) => {
    setUploading(true);
    setError('');
    const arr = Array.from(files);

    for (const file of arr) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('bucket', bucket);
      formData.append('folder', folder);

      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setUploaded(prev => [{ url: data.url, path: data.path, bucket: data.bucket, name: file.name }, ...prev]);
      }
    }
    setUploading(false);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
  }, [bucket, folder]);

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  };

  const deleteFile = async (path: string, fileBucket: string) => {
    await fetch('/api/upload', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bucket: fileBucket, path }),
    });
    setUploaded(prev => prev.filter(f => f.path !== path));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#080e1d', fontFamily: 'Inter, sans-serif', padding: '80px 24px 48px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.25)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <FolderOpen size={12} />
            Admin · Image Upload
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '900', color: '#fff', marginBottom: '8px' }}>
            Subir Fotos al Sitio
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
            Sube fotos de proyectos y del sitio a Supabase Storage. Las URLs generadas se usan directamente en el código.
          </p>
        </div>

        {/* Bucket selector */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {buckets.map(b => (
            <button key={b.id} onClick={() => { setBucket(b.id); setFolder(folders[b.id][0]); }} style={{
              padding: '16px 20px', borderRadius: '14px', textAlign: 'left', cursor: 'pointer',
              background: bucket === b.id ? 'rgba(255,183,3,0.1)' : 'rgba(255,255,255,0.03)',
              border: bucket === b.id ? '1px solid rgba(255,183,3,0.4)' : '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.2s',
            }}>
              <div style={{ fontSize: '13px', fontWeight: '800', color: bucket === b.id ? '#ffb703' : '#fff', marginBottom: '4px' }}>{b.label}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{b.desc}</div>
            </button>
          ))}
        </div>

        {/* Folder selector */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Carpeta
          </label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {folders[bucket].map(f => (
              <button key={f} onClick={() => setFolder(f)} style={{
                padding: '7px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                background: folder === f ? '#ffb703' : 'rgba(255,255,255,0.05)',
                color: folder === f ? '#080e1d' : 'rgba(255,255,255,0.6)',
                border: folder === f ? '1px solid #ffb703' : '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s',
              }}>{f}</button>
            ))}
          </div>
        </div>

        {/* Drop zone */}
        <div
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => fileRef.current?.click()}
          style={{
            borderRadius: '20px', padding: '56px 32px', textAlign: 'center', cursor: 'pointer',
            background: dragging ? 'rgba(255,183,3,0.08)' : 'rgba(255,255,255,0.02)',
            border: dragging ? '2px dashed rgba(255,183,3,0.6)' : '2px dashed rgba(255,255,255,0.12)',
            transition: 'all 0.2s', marginBottom: '24px',
          }}
        >
          {uploading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <Loader2 size={40} style={{ color: '#ffb703', animation: 'spin 1s linear infinite' }} />
              <span style={{ color: '#ffb703', fontWeight: '700' }}>Subiendo...</span>
            </div>
          ) : (
            <>
              <Upload size={40} style={{ color: 'rgba(255,183,3,0.5)', marginBottom: '16px' }} />
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
                Arrastra fotos aquí o haz click
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                JPG, PNG, WebP · Máx 10MB por archivo · Múltiples archivos permitidos
              </div>
              <div style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 18px', borderRadius: '999px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.3)', fontSize: '13px', fontWeight: '700', color: '#ffb703' }}>
                <Upload size={14} />
                Seleccionar archivos
              </div>
            </>
          )}
        </div>

        <input ref={fileRef} type="file" accept="image/*" multiple style={{ display: 'none' }}
          onChange={e => e.target.files && uploadFiles(e.target.files)} />

        {error && (
          <div style={{ padding: '14px 16px', borderRadius: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5', fontSize: '13px', marginBottom: '20px' }}>
            Error: {error}
          </div>
        )}

        {/* Uploaded files */}
        {uploaded.length > 0 && (
          <div>
            <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Archivos subidos ({uploaded.length})
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {uploaded.map((f) => (
                <div key={f.path} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {/* Preview */}
                  <div style={{ width: '52px', height: '52px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={f.url} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLElement).style.display = 'none'; }} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.bucket}/{f.path}</div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    <button onClick={() => copyUrl(f.url)} style={{
                      display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700',
                      background: copied === f.url ? 'rgba(34,197,94,0.12)' : 'rgba(255,183,3,0.1)',
                      border: copied === f.url ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,183,3,0.25)',
                      color: copied === f.url ? '#4ade80' : '#ffb703',
                    }}>
                      {copied === f.url ? <CheckCircle2 size={13} /> : <Copy size={13} />}
                      {copied === f.url ? 'Copiado' : 'Copiar URL'}
                    </button>
                    <button onClick={() => deleteFile(f.path, f.bucket)} style={{
                      display: 'flex', alignItems: 'center', padding: '7px 10px', borderRadius: '8px', cursor: 'pointer',
                      background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171',
                    }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', padding: '16px', borderRadius: '14px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.15)' }}>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#ffb703', marginBottom: '8px' }}>💡 Cómo usar estas URLs</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                Copia la URL y compártela con Julio para que la agregue al portfolio o a la sección correspondiente del sitio. Las imágenes son públicas y se sirven directamente desde Supabase CDN.
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
