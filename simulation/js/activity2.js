let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <br>
      <p style="text-align:left;">
         Handle of a spoon has rectangular cross section of size ${l_mm_a2}mm &times; ${w_mm_a2}mm. <br>
         Find the length required so that its end temperature should not exceed ${T_end_a2}&deg;C even when the spoon is dipped in boiling water at ${T0_a2}&deg;C. <br>
         K = ${K_a2}W/m-K &emsp; h = ${h_a2}W/m<sup>2</sup>-K. <br>
         Ambient temperature is at ${Tf_a2}&deg;C
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Perimeter
      </p>
      <div id="act2-P-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ P = 2 \×(l+w) =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-P-inp' class='form-control fs-16px' /><span style="display:contents;"> m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_P();' id='act2-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    l_mm_a2 = random1(4, 9);
    l_m_a2 = parseFloat((l_mm_a2 / 1000).toFixed(3));
    w_mm_a2 = random1(2, 5);
    w_m_a2 = parseFloat((w_mm_a2 / 1000).toFixed(3));
    Tf_a2 = random1(18, 23);
    P_a2 = 2 * (l_m_a2 + w_m_a2);
    A_a2 = l_m_a2 * w_m_a2;
    m_a2 = Math.sqrt((h_a2 * P_a2) / (K_a2 * A_a2));
    theta_0_a2 = T0_a2 - Tf_a2;
    theta_a2 = T_end_a2 - Tf_a2;
    L_a2 = -(1 / m_a2) * Math.log(theta_a2 / theta_0_a2);
    console.log('l_mm_a2', l_mm_a2);
    console.log('l_m_a2', l_m_a2);
    console.log('w_mm_a2', w_mm_a2);
    console.log('w_m_a2', w_m_a2);
    console.log('Tf_a2', Tf_a2);
    console.log('P_a2', P_a2);
    console.log('A_a2', A_a2);
    console.log('m_a2', m_a2);
    console.log('theta_0_a2', theta_0_a2);
    console.log('theta_a2', theta_a2);
    console.log('L_a2', L_a2);
}
function a2_verify_P() {
    let inp = (document.getElementById('act2-P-inp'));
    console.log(P_a2);
    if (!verify_values(parseFloat(inp.value), P_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-P-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$P = 2 \×(l+w) =  ${parseFloat(P_a2.toFixed(3))} \\ m $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Area
      </p>
      <div id="act2-A-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 6 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$A = l\× w = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-A-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_A();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_A() {
    let inp = (document.getElementById('act2-A-inp'));
    console.log(A_a2);
    if (!verify_values(parseFloat(inp.value), A_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A = l \× w =  ${parseFloat(A_a2.toFixed(6))} \\ m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <div id="act2-m-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$m = \\sqrt{\\frac{hP}{KA}} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-m-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_m();' id='act2-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_m() {
    let inp = (document.getElementById('act2-m-inp'));
    console.log(m_a2);
    if (!verify_values(parseFloat(inp.value), m_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-m-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$m = \\sqrt{\\frac{hP}{KA}}  =  ${parseFloat(m_a2.toFixed(3))} $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <div id="act2-theta-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\θ_0 = T_0 - T_f = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-theta-0-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>

         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\θ = T_{end} - T_f = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-theta-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_theta();' id='act2-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_theta() {
    let inp1 = (document.getElementById('act2-theta-0-inp'));
    let inp2 = (document.getElementById('act2-theta-inp'));
    console.log(theta_0_a2, theta_a2);
    if (!verify_values(parseFloat(inp1.value), theta_0_a2)) {
        inp1.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp1.style.border = '1px solid #ced4da';
        inp1.disabled = true;
    }
    if (!verify_values(parseFloat(inp2.value), theta_a2)) {
        inp2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp2.style.border = '1px solid #ced4da';
        inp2.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-theta-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\θ_0 = T_0 - T_f  =  ${theta_0_a2}\°C
         $$
         
         $$ 
            \θ = T_{end} - T_f = ${theta_a2}\°C
         $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Now, at x = L
      </p>
      <p>
         $$
            \\frac{\θ}{\θ_0} = e^{-mL}
         $$
      </p>
      <div id="act2-L-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$L =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-L-inp' class='form-control fs-16px' /><span style="display:contents;">m</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_L();' id='act2-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_L() {
    let inp = (document.getElementById('act2-L-inp'));
    console.log(L_a2);
    if (!verify_values(parseFloat(inp.value), L_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-L-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ L =  ${parseFloat(L_a2.toFixed(3))} \\ m $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity3(this);' id='act2-btn1'>Verify</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map