import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const BASE = 'https://www.opennote.com';
const ASSETS_BASE = 'https://assets.opennote.com/opennote/landing';
const OUT = 'public';

const files = [
  // University logos
  ['/images/logos/ucla.svg', 'images/logos/ucla.svg'],
  ['/images/logos/harvard.svg', 'images/logos/harvard.svg'],
  ['/images/logos/berkeley.svg', 'images/logos/berkeley.svg'],
  ['/images/logos/michigan.svg', 'images/logos/michigan.svg'],
  ['/images/logos/nus.svg', 'images/logos/nus.svg'],
  ['/images/logos/yale.svg', 'images/logos/yale.svg'],
  ['/images/logos/waterloo.svg', 'images/logos/waterloo.svg'],
  ['/images/logos/caltech.svg', 'images/logos/caltech.svg'],
  ['/images/logos/stanford.svg', 'images/logos/stanford.svg'],
  ['/images/logos/cmu.svg', 'images/logos/cmu.svg'],
  ['/images/logos/princeton.svg', 'images/logos/princeton.svg'],
  // Hero
  ['/videos/plane.mp4', 'videos/plane.mp4'],
  // Galileo tab section
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow-section-bg.0ps_d~t~j-78m.svg&w=3840&q=75', 'images/yellow-section-bg.svg'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleft-side.0djs.cvzz-6_u.png&w=750&q=75', 'images/left-side.png'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright-side.0l9wfophao7y1.png&w=750&q=75', 'images/right-side.png'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.08s~n-t3nv~-d.png&w=32&q=75', 'images/star.png'],
  // Built For How
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fformula-girl.05wp8n8c1.xq7.svg&w=640&q=75', 'images/formula-girl.svg'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-bg.11yjh9v..-wnq.png&w=640&q=75', 'images/testimonial-bg.png'],
  // Stop Juggling cards
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcube.0b3i6tah-~-bt.svg&w=640&q=75', 'images/cube.svg'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollaborate.14qb31j75r-dc.svg&w=640&q=75', 'images/collaborate.svg'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffolder.01stbrgvexp4n.svg&w=640&q=75', 'images/folder.svg'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsnake.06ort3.hl~_1w.svg&w=640&q=75', 'images/snake.svg'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquiz.0qyj.z23rus6q.svg&w=640&q=75', 'images/quiz.svg'],
  // Footer creatures
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-left-visual.0hv505ow3dpze.png&w=1080&q=75', 'images/footer-left-visual.png'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-center-visual.0oyb4yxid0uo3.png&w=750&q=75', 'images/footer-center-visual.png'],
  ['/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-right-visual.0eli.fsn5~u1-.png&w=1080&q=75', 'images/footer-right-visual.png'],
  // Fonts
  ['/_next/static/media/Heming%20Variable-s.p.13-gabarr7678.ttf', 'fonts/HemingVariable.ttf'],
  ['/_next/static/media/IowanOld-s.p.0v54zwivz1tdr.woff2', 'fonts/IowanOld.woff2'],
  ['/_next/static/media/IowanOld_Bold-s.p.0_8rmng3oh~mi.ttf', 'fonts/IowanOld_Bold.ttf'],
  ['/_next/static/media/SuisseIntl_Light-s.p.0yahvyk1v2fc1.ttf', 'fonts/SuisseIntl_Light.ttf'],
  ['/_next/static/media/SuisseIntl_Regular-s.p.0zwbfqlohq~0v.ttf', 'fonts/SuisseIntl_Regular.ttf'],
  ['/_next/static/media/SuisseIntl_Medium-s.p.0v_lhpn5f9750.ttf', 'fonts/SuisseIntl_Medium.ttf'],
  ['/_next/static/media/SuisseIntl_SemiBold-s.p.0tzhw2hhlud5e.ttf', 'fonts/SuisseIntl_SemiBold.ttf'],
  ['/_next/static/media/SuisseIntl_Bold-s.p.0b8it_s7q2gi_.ttf', 'fonts/SuisseIntl_Bold.ttf'],
];

const tabVideos = [
  ['landing_feynman_tab.mp4', 'videos/landing_feynman_tab.mp4'],
  ['landing_generation_tab.mp4', 'videos/landing_generation_tab.mp4'],
  ['landing_references_tab.mp4', 'videos/landing_references_tab.mp4'],
  ['landing_practice_tab.mp4', 'videos/landing_practice_tab.mp4'],
  ['landing_green_section.mp4', 'videos/landing_green_section.mp4'],
];

async function dl(url, outPath) {
  const full = url.startsWith('http') ? url : BASE + url;
  const dest = `${OUT}/${outPath}`;
  await mkdir(dirname(dest), { recursive: true });
  try {
    const res = await fetch(full, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) { console.error(`  FAIL ${res.status} ${full}`); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`  ✓ ${outPath} (${(buf.length/1024).toFixed(1)}KB)`);
    return true;
  } catch (e) { console.error(`  ERR ${full}: ${e.message}`); return false; }
}

const all = [
  ...files,
  ...tabVideos.map(([f, p]) => [`${ASSETS_BASE}/${f}`, p]),
];

let ok = 0, fail = 0;
const batchSize = 4;
for (let i = 0; i < all.length; i += batchSize) {
  const batch = all.slice(i, i + batchSize);
  const results = await Promise.all(batch.map(([u, p]) => dl(u, p)));
  ok += results.filter(Boolean).length;
  fail += results.filter(r => !r).length;
}
console.log(`\nDone. ${ok} ok, ${fail} failed.`);
