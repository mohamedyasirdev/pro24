const checkbox = document.getElementById('checkbox');
const professional = document.getElementById('professional');
const master = document.getElementById('master');
const basic = document.getElementById('basic');
const n1 = document.getElementById('n1');

checkbox.addEventListener('click', () => {
  basic.textContent = basic.textContent === '75K SDG' ? '14K SDG' : '75K SDG';
  professional.textContent = professional.textContent === '260K SDG' ? '35K SDG' : '260K SDG';
  master.textContent = master.textContent === '135K SDG' ? '25K SDG' : '135K SDG';

  p1_n1.textContent = p1_n1.textContent === '5 قطع جيل الاستحمام بالفانيلا' ? 'قعطة جيل استحمام بالفانيلا 300ml' : '5 قطع جيل الاستحمام بالفانيلا';
  p1_n2.textContent = p1_n2.textContent === '5 قطع سيرم حب الشباب' ? 'قطعة سيرم حب الشباب' : '5 قطع سيرم حب الشباب';
  p1_n3.textContent = p1_n3.textContent === '5 قطع سيرم الهيالورونيك' ? 'قطعة سيرم الهيالورونيك' : '5 قطع سيرم الهيالورونيك';
  

  plan2_1.textContent = plan2_1.textContent === '4 كريم وقاية من الشمس' ? 'كريم وقاية من الشمس' : '4 كريم وقاية من الشمس';
  plan2_2.textContent = plan2_2.textContent === '4 غسول سيتافيل' ? 'غسول سيتافيل': '4 غسول سيتافيل';
  plan2_3.textContent = plan2_3.textContent === '3 فارماكلينيكس لايتنكس جولد سيرم 30ml' ? 'فارماكلينيكس لايتنكس جولد سيرم 10ml': '3 فارماكلينيكس لايتنكس جولد سيرم 30ml';
  

  plan3_1.textContent = plan3_1.textContent === '4 ايجو كيوفي غسول شديد الترطيب' ? 'ايجو كيوفي غسول شديد الترطيب 100ml' : '4 ايجو كيوفي غسول شديد الترطيب';
  plan3_2.textContent = plan3_2.textContent === '3 سيسديرما رول' ? 'سيسديرما رول 75ml': '3 سيسديرما رول';
  plan3_3.textContent = plan3_3.textContent === '2 لويس ويدمر كريم' ? 'لويس ويدمر كريم 200ml': '2 لويس ويدمر كريم';

});
