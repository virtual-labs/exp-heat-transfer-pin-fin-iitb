let act3_div;
function activity3(btn) {
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act3-div'>
      <h3>Activity 3</h3>
      <br>
      <br>
      <img src="./images/fig2.png" style="width:40%">
      <br>
      <br>
      <p style="text-align:left;">
         Find the efficiency of the composite fin as shown in figure. <br>
         the end of the fin is insulated.
      </p>
      <div class="row justify-content-center">
         <div class="col-md-3">
            L = ${L_mm_a3} mm
         </div>
         <div class="col-md-3">
            K<sub>1</sub> = ${K1_a3} W/m-K
         </div>
         <div class="col-md-3">
            K<sub>2</sub> = ${K2_a3} W/m-K
         </div>
      </div>
      <div class="row justify-content-center">
         <div class="col-md-3">
            h = ${h_a3} W/m<sup>2</sup>-K
         </div>
         <div class="col-md-3">
            d<sub>1</sub> = ${d1_mm_a3} mm
         </div>
         <div class="col-md-3">
            d<sub>1</sub> = ${d2_mm_a3} mm
         </div>
      </div>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Perimeter
      </p>
      <div id="act3-P-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$ P = \πd_2 =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-P-inp' class='form-control fs-16px' /><span style="display:contents;"> m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_P();' id='act3-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
    act3_div = document.getElementById('act3-div');
}
function internal_calculation3() {
    L_mm_a3 = random1(60, 151);
    L_m_a3 = parseFloat((L_mm_a3 / 1000).toFixed(3));
    K1_a3 = random1(10, 26);
    K2_a3 = random1(40, 51);
    h_a3 = random1(12, 19);
    d1_mm_a3 = random1(3, 6);
    d1_m_a3 = parseFloat((d1_mm_a3 / 1000).toFixed(3));
    d2_mm_a3 = random1(10, 16);
    d2_m_a3 = parseFloat((d2_mm_a3 / 1000).toFixed(3));
    P_a3 = Math.PI * d2_m_a3;
    A1_a3 = (Math.PI / 4) * Math.pow(d1_m_a3, 2);
    A2_a3 = (Math.PI / 4) * Math.pow(d2_m_a3, 2);
    m_a3 = Math.sqrt((h_a3 * P_a3) / (K1_a3 * A1_a3 + K2_a3 * A2_a3));
    eff_a3 = Math.tanh(m_a3 * L_m_a3) / (m_a3 * L_m_a3);
    console.log('L_mm_a3', L_mm_a3);
    console.log('L_m_a3', L_m_a3);
    console.log('K1_a3', K1_a3);
    console.log('K2_a3', K2_a3);
    console.log('h_a3', h_a3);
    console.log('d1_mm_a3', d1_mm_a3);
    console.log('d1_mm_a3', d1_m_a3);
    console.log('d2_mm_a3', d2_mm_a3);
    console.log('d2_m_a3', d2_m_a3);
    console.log('P_a3', P_a3);
    console.log('A1_a3', A1_a3);
    console.log('A2_a3', A2_a3);
    console.log('m_a3', m_a3);
    console.log('eff_a3', eff_a3);
}
function a3_verify_P() {
    let inp = (document.getElementById('act3-P-inp'));
    console.log(P_a3);
    if (!verify_values(parseFloat(inp.value), P_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-P-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$P = \πd_2 =  ${parseFloat(P_a3.toFixed(4))} \\ m $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Area
      </p>
      <div id="act3-A-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 6-7 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$A_1 = \\frac{\\pi}{4}d_1^2 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-A1-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <div class="fs-16px" style="color:red;">
            Note: enter value till 6 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$A_2 = \\frac{\\pi}{4}d_2^2 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-A2-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_A();' id='act3-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_A() {
    let inp1 = (document.getElementById('act3-A1-inp'));
    let inp2 = (document.getElementById('act3-A2-inp'));
    console.log(A1_a3, A2_a3);
    if (!verify_values(parseFloat(inp1.value), A1_a3)) {
        inp1.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp1.style.border = '1px solid #ced4da';
        inp1.disabled = true;
    }
    if (!verify_values(parseFloat(inp2.value), A2_a3)) {
        inp2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp2.style.border = '1px solid #ced4da';
        inp2.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_1 = \\frac{\\pi}{4}d_1^2 =  ${parseFloat(A1_a3.toFixed(7))} \\ m^2 $$
         $$A_2 = \\frac{\\pi}{4}d_2^2 =  ${parseFloat(A2_a3.toFixed(6))} \\ m^2 $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <div id="act3-m-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$m = \\sqrt{\\frac{hP}{K_1A_1 + K_2A_2}} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-m-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_m();' id='act3-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_m() {
    let inp = (document.getElementById('act3-m-inp'));
    console.log(m_a3);
    if (!verify_values(parseFloat(inp.value), m_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-m-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$m = \\sqrt{\\frac{hP}{K_1A_1 + K_2A_2}}  =  ${parseFloat(m_a3.toFixed(3))} $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Efficiency
      </p>
      <div id="act3-eff-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\η = \\frac{tanh(mL)}{mL} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-eff-inp' class='form-control fs-16px' /><span style="display:contents;"> %</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_eff();' id='act3-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_eff() {
    let inp = (document.getElementById('act3-eff-inp'));
    console.log(eff_a3);
    if (!verify_values(parseFloat(inp.value), eff_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-eff-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \η = \\frac{tanh(mL)}{mL}  =  ${parseFloat(eff_a3.toFixed(3))}\\%
         $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act3-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity3();
//# sourceMappingURL=activity3.js.map