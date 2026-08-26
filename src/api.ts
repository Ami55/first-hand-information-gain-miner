const URL='https://gemini-proxy-3.vercel.app/api/information-gain-miner';
export async function mine(payload:Record<string,unknown>){const r=await fetch(URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||`Request failed (${r.status})`);return d;}
