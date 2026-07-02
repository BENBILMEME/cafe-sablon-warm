import { Component } from 'react';
export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  componentDidCatch(e, i) { console.error('[ErrorBoundary]', e, i?.componentStack); }
  render() {
    if (this.state.error) return (<div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',background:'#FFF8F0',color:'#3C2415',fontFamily:'Georgia,serif',padding:'24px',textAlign:'center',flexDirection:'column',gap:'16px'}}><p style={{fontSize:'1.5rem'}}>Bir hata oluştu</p><p style={{fontSize:'0.9rem',color:'#6B3524'}}>Lütfen sayfayı yenileyin.</p><button onClick={()=>window.location.reload()} style={{padding:'12px 24px',background:'#C67B5C',color:'white',border:'none',borderRadius:'9999px',fontWeight:600,cursor:'pointer'}}>Yenile</button></div>);
    return this.props.children;
  }
}
