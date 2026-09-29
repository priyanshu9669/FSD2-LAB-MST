import React, { useState } from 'react';

const MAX_LIMIT = 100;

export default function PostBox() {
  const [content, setContent] = useState('');
  const [isPosted, setIsPosted] = useState(false);

  const charCount = content.length;
  const isExceeded = charCount > MAX_LIMIT;
  const isEmpty = content.trim().length === 0;

  // Disable button when empty OR over 100 characters
  const isButtonDisabled = isEmpty || isExceeded;

  const handlePost = () => {
    setIsPosted(true);
    setTimeout(() => setIsPosted(false), 3000);
    setContent('');
  };

  return (
    <div style={styles.card}>
      {/* Header Profile Info */}
      <div style={styles.header}>
        <div style={styles.avatar}>G</div>
        <div>
          <h4 style={styles.userName}>Alex Developer</h4>
          <span style={styles.userHandle}>@alex_dev • Public</span>
        </div>
      </div>

      {/* 1. Controlled Textarea */}
      <textarea
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          ...styles.textarea,
          borderColor: isExceeded ? '#ef4444' : '#e5e7eb',
          boxShadow: isExceeded ? '0 0 0 3px rgba(239, 68, 68, 0.15)' : 'none',
        }}
      />

      {/* Toolbar & Actions */}
      <div style={styles.actionToolbar}>
        <div style={styles.iconButtons}>
          <button style={styles.iconBtn} title="Add Image">🖼️</button>
          <button style={styles.iconBtn} title="Add Emoji">😊</button>
          <button style={styles.iconBtn} title="Add Tag">🏷️</button>
        </div>

        {/* 2 & 3. Live Character Counter & Limit Exceeded Alert */}
        <div style={styles.counterSection}>
          {isExceeded && (
            <span style={styles.limitError}>Limit exceeded</span>
          )}
          
          <span
            style={{
              ...styles.counterText,
              color: isExceeded ? '#ef4444' : '#6b7280',
              fontWeight: isExceeded ? 'bold' : 'normal',
            }}
          >
            {charCount} / {MAX_LIMIT}
          </span>
        </div>
      </div>

      {/* 4. Disable Post button when text is empty or over the limit */}
      <button
        onClick={handlePost}
        disabled={isButtonDisabled}
        style={{
          ...styles.postBtn,
          backgroundColor: isButtonDisabled ? '#9ca3af' : '#2563eb',
          cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
        }}
      >
        Post
      </button>

      {/* Success Notification */}
      {isPosted && (
        <div style={styles.successToast}>
          ✨ Post published successfully!
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    width: '420px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
    border: '1px solid #f3f4f6',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '14px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  userName: {
    margin: 0,
    fontSize: '15px',
    fontWeight: '600',
    color: '#111827',
  },
  userHandle: {
    fontSize: '12px',
    color: '#6b7280',
  },
  textarea: {
    width: '100%',
    height: '110px',
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    boxSizing: 'border-box',
    fontSize: '15px',
    color: '#1f2937',
    outline: 'none',
    resize: 'none',
    transition: 'all 0.2s ease',
    backgroundColor: '#f9fafb',
  },
  actionToolbar: {
    display: 'flex',
    justify-content: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  iconButtons: {
    display: 'flex',
    gap: '6px',
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '4px 6px',
    borderRadius: '6px',
    transition: 'background 0.2s',
  },
  counterSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  limitError: {
    color: '#ef4444',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: '#fef2f2',
    padding: '2px 8px',
    borderRadius: '4px',
    border: '1px solid #fee2e2',
  },
  counterText: {
    fontSize: '13px',
    fontFamily: 'monospace',
  },
  postBtn: {
    width: '100%',
    marginTop: '14px',
    padding: '11px',
    borderRadius: '10px',
    border: 'none',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
  successToast: {
    marginTop: '12px',
    padding: '10px',
    backgroundColor: '#ecfdf5',
    color: '#047857',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '500',
    border: '1px solid #a7f3d0',
  }
};
