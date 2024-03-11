script = document.createElement('script');
script.textContent = "function filter() {const qualityConditions = {'240p': ['2160p', '1440p', '1080p', '720p', '480p', '360p', '240p'],'360p': ['2160p', '1440p', '1080p', '720p', '480p', '360p'],'480p': ['2160p', '1440p', '1080p', '720p', '480p'],'720p': ['2160p', '1440p', '1080p', '720p'],'1080p':['2160p', '1440p', '1080p'],'1440p':['2160p', '1440p'],'2160p':['2160p']};localStorage.setItem('vr', document.getElementById('VR').checked);localStorage.setItem('quality', document.getElementById('min_quality').value);for (const child of document.getElementById('vidresults').children) {quality = child.children[0].textContent;const vr = quality.includes('VR');quality = quality.replace('VR', '');quality = quality.replace('2K (1440p)', '1440p');quality = quality.replace('4K (2160p)', '2160p');if (qualityConditions[document.getElementById('min_quality').value].includes(quality)){if(vr == true){if (document.getElementById('VR').checked){child.style.display = 'block';}else{child.style.display = 'none';}}else{child.style.display = 'block';}}else{child.style.display = 'none';}}}";
document.body.appendChild(script);
document.getElementById('toptopbel').style.marginBottom = '0px';
const html = document.createElement('div');
html.style = 'background-image: linear-gradient(#222326,#000); clear: both; border: 1px solid #333; min-height: 20px; line-height: 20px; color: #FFF';
html.innerHTML = "<select id='min_quality' onchange='filter()'><option value='240p'>240p</option><option value='360p'>360p</option><option value='480p'>480p</option><option value='720p'>720p</option><option value='1080p' selected>1080p</option><option value='1440p'>1440p</option><option value='2160p'>2160p</option></select><input type='checkbox' id='VR' onclick='filter()'><label for='VR'>VR</label>";
try
{
    document.getElementById('div-search-results').insertBefore(html, document.getElementById('toptopbel').nextSibling);
}
catch
{
    document.getElementById('panel-rightXpornstar').insertBefore(html, document.getElementById('toptopbel').nextSibling);
}
document.getElementById('VR').checked = (localStorage.getItem('vr') === 'true');
document.getElementById('min_quality').value = localStorage.getItem('quality');
function filter() {
    const qualityConditions = {
        '240p': ['2160p', '1440p', '1080p', '720p', '480p', '360p', '240p'],
        '360p': ['2160p', '1440p', '1080p', '720p', '480p', '360p'],
        '480p': ['2160p', '1440p', '1080p', '720p', '480p'],
        '720p': ['2160p', '1440p', '1080p', '720p'],
        '1080p':['2160p', '1440p', '1080p'],
        '1440p':['2160p', '1440p'],
        '2160p':['2160p']};
        localStorage.setItem('vr', document.getElementById('VR').checked);
        localStorage.setItem('quality', document.getElementById('min_quality').value);
    for (const child of document.getElementById('vidresults').children) {
        quality = child.children[0].textContent;
        const vr = quality.includes('VR');
        quality = quality.replace('VR', '');
        quality = quality.replace('2K (1440p)', '1440p');
        quality = quality.replace('4K (2160p)', '2160p');
        if (qualityConditions[document.getElementById('min_quality').value].includes(quality))
        {
            if(vr == true)
            {
                if (document.getElementById('VR').checked)
                {
                    child.style.display = 'block';
                }
                else
                {
                    child.style.display = 'none';
                }
            }
            else
            {
                child.style.display = 'block';
            }
        }
        else
        {
            child.style.display = 'none';
        }
    }
}
filter();