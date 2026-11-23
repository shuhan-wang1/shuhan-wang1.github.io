"""Regenerate static project pages and shared overview data: python3 tools/build-projects.py."""
from pathlib import Path
import json
from html import escape as e
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'projects.json').read_text())
(root/'project-data.js').write_text('window.PROJECT_DATA = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n')
for key,p in data.items():
 en=p['en'];slug=p['slug'];title=en['title'];summary=en.get('summary',en['sections'][0][1]);headline=en.get('headline',title)
 sections=''
 for i,(heading,text) in enumerate(en['sections']):
  paragraphs=''.join(f'<p>{e(part)}</p>' for part in text.split('\n\n'))
  sections+=f'<section id="section-{i}" class="project-section"><h2>{e(heading)}</h2><div class="section-prose">{paragraphs}</div></section>'
  for fi,fig in enumerate(p.get('figures',[])):
   if fig['after']==i:
    sections+=f'<figure class="blog-figure" data-blog-figure="{fi}"><a class="figure-zoom" href="../../{e(fig["src"])}" target="_blank" rel="noopener noreferrer"><img src="../../{e(fig["src"])}" alt="{e(fig["en"]["alt"])}" width="1920" height="680" loading="lazy"></a><figcaption>{e(fig["en"]["caption"])}</figcaption></figure>'
 resources=''.join(f'<a class="button button-primary" href="{e(url)}" target="_blank" rel="noopener noreferrer">{e(label)}</a>' for label,_,url in p['links'])
 toc=''.join(f'<a href="#section-{i}">{e(h)}</a>' for i,(h,_) in enumerate(en['sections']))
 flow=''.join(f'<li>{e(s)}</li>' for s in p['flow'][0])
 figure=f'<figure class="concept-figure"><ol class="concept-flow">{flow}</ol><figcaption id="concept-caption">Conceptual sketch of the project; not experimental data.</figcaption></figure>'
 if p.get('blog'): figure=''
 if key=='climb':
  figure+='''<figure class="result-figure"><div class="result-row"><span>Matched baseline</span><div class="result-bar" style="--bar:49.5%"></div><strong>0.099 ± 0.008</strong></div><div class="result-row"><span>CLIMB</span><div class="result-bar full" style="--bar:100%"></div><strong>0.200 ± 0.005</strong></div><figcaption id="result-caption">Mean achievement rate · Craftax-Symbolic · 10M steps · 3 seeds · final 200 episodes. Matched 50:50 replay baseline. Values reproduced from the course report.</figcaption></figure>'''
 if key=='temporal':
  resources+='''<a class="button preview-toggle" href="#thesis-reader" id="show-thesis">Read thesis on this page</a>'''
  sections+='''<section id="thesis-reader" class="project-section"><h2 id="reader-heading">MSc Thesis · 77.5/100</h2><p id="reader-note">Read the dissertation here, or use the Google Drive link above to open it in a new tab.</p><iframe title="MSc thesis preview" src="https://drive.google.com/file/d/1APfXcH07AjycjdiYZ2i10BH3FxVxAXoh/preview" loading="lazy" allow="fullscreen"></iframe></section>'''
 others=''.join(f'<a href="../{v["slug"]}/" data-related="{k}">{e(v["en"]["title"])}</a>' for k,v in data.items() if k!=key)
 html=f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="{e(summary,quote=True)}"><title>{e(title)} — Shuhan Wang</title><link rel="canonical" href="https://shuhan-wang1.github.io/projects/{slug}/"><meta property="og:title" content="{e(title)} — Shuhan Wang"><meta property="og:description" content="{e(summary,quote=True)}"><link rel="icon" href="../../assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="../../styles.css"><link rel="stylesheet" href="../../project.css"><script src="../../project-data.js" defer></script><script src="../../project.js" defer></script></head>
<body data-project-id="{key}" class="{'research-blog' if p.get('blog') else 'project-page'}"><a class="skip-link" href="#project-main" id="skip">Skip to content</a><header class="site-header"><div class="header-inner"><a class="wordmark" href="../../" aria-label="Shuhan Wang, home">sw<span class="wordmark-dot">.</span></a><a class="text-link" id="back-home" href="../../#research">All projects</a><button id="project-language" class="language-button" aria-label="Switch to Chinese">中文</button></div></header>
<main id="project-main" class="project-document container"><header class="project-hero"><p class="eyebrow" id="page-kicker">{'OPENQFT / RESEARCH JOURNAL' if p.get('blog') else 'RESEARCH / PROJECT NOTES'}</p><h1 id="page-title">{e(headline)}</h1><p id="page-summary">{e(summary)}</p><div class="project-resources">{resources}</div></header><div class="project-layout"><aside><nav class="project-toc" aria-label="On this page"><span id="toc-label">On this page</span>{toc}</nav></aside><article class="project-article">{figure}<div id="project-sections">{sections}</div><p class="project-updated" id="updated">Updated November 2026</p></article></div><nav class="related-projects" aria-label="Other projects"><h2 id="related-title">Explore other projects</h2>{others}</nav></main><footer class="site-footer container"><a href="../../">Shuhan Wang / 王书涵</a><a href="mailto:jackwsh@outlook.com">jackwsh@outlook.com</a></footer></body></html>'''
 path=root/'projects'/slug;path.mkdir(parents=True,exist_ok=True);(path/'index.html').write_text(html)
