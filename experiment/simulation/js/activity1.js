let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Conduction (Heat & Mass Transfer): Heat transfer through pin fin</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <br>
      <img src="./images/fig1.png" style="width:30%">
      <br>
      <br>

      <p style="text-align:left">
         An aluminium rod of ${d_cm_a1}cm in diameter and ${L_cm_a1}cm long, protrudes from a wall maintained at ${T0_a1}&deg;C. The rod is exposed to an environment at ${Tf_a1}&deg;C. <br>
         The convective heat transfer coefficient is ${h_a1}W/m<sup>2</sup>-K.<br>
         K<sub>Al</sub> = ${K_a1}W/m-K. Rod is insulated at the end. <br>
         Calculate : <br>
         (&#8544;) heat loss <br>
         (&#8545;) fin efficiency <br>
         (&#8546;) temperature at the end of fin <br>

      </p>
      <br>

      <div id="act1-theta-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$ \θ_0 = T_0 - T_f =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:40%" id='act1-theta-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_theta();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    d_cm_a1 = parseFloat(random(2.0, 3.0).toFixed(1));
    d_m_a1 = parseFloat((d_cm_a1 / 100).toFixed(3));
    T0_a1 = random1(225, 276);
    Tf_a1 = random1(25, 36);
    theta_0_a1 = T0_a1 - Tf_a1;
    P_a1 = Math.PI * d_m_a1;
    A_a1 = (Math.PI / 4) * Math.pow(d_m_a1, 2);
    m_a1 = Math.sqrt((h_a1 * P_a1) / (K_a1 * A_a1));
    Q_a1 =
        Math.sqrt(h_a1 * P_a1 * K_a1 * A_a1) *
            theta_0_a1 *
            Math.tanh(m_a1 * L_m_a1);
    effc_a1 = Math.tanh(m_a1 * L_m_a1) / (m_a1 * L_m_a1);
    T_end_a1 = theta_0_a1 / Math.cosh(m_a1 * L_m_a1) + Tf_a1;
    console.log('d_cm_a1', d_cm_a1);
    console.log('d_m_a1', d_m_a1);
    console.log('T0_a1', T0_a1);
    console.log('Tf_a1', Tf_a1);
    console.log('theta_0_a1', theta_0_a1);
    console.log('P_a1', P_a1);
    console.log('A_a1', A_a1);
    console.log('m_a1', m_a1);
    console.log('Q_a1', Q_a1);
    console.log('effc_a1', effc_a1);
    console.log('T_end_a1', T_end_a1);
}
function a1_verify_theta() {
    let inp = (document.getElementById('act1-theta-inp'));
    console.log(theta_0_a1);
    if (!verify_values(parseFloat(inp.value), theta_0_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-theta-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\θ_0 = T_0 - T_f  = ${theta_0_a1} \°C $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Perimeter
      </p>

      <div id="act1-P-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$P = \πd = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-P-inp' class='form-control fs-16px' /><span style="display:contents;">m</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_P();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_P() {
    let inp = (document.getElementById('act1-P-inp'));
    console.log(P_a1);
    if (!verify_values(parseFloat(inp.value), P_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-P-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$P = \πd =  ${parseFloat(P_a1.toFixed(4))} \\ m $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Area
      </p>
      <div id="act1-A-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 6 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$A = \\frac{\π}{4}d^2 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-A-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_A();' id='act1-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_A() {
    let inp = (document.getElementById('act1-A-inp'));
    console.log(A_a1);
    if (!verify_values(parseFloat(inp.value), A_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A = \\frac{\π}{4}d^2 =  ${parseFloat(A_a1.toFixed(6))} \\ m^2 $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <div id="act1-m-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$m = \\sqrt{\\frac{hP}{KA}} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-m-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_m();' id='act1-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_m() {
    let inp = (document.getElementById('act1-m-inp'));
    console.log(m_a1);
    if (!verify_values(parseFloat(inp.value), m_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-m-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$m = \\sqrt{\\frac{hP}{KA}}  =  ${parseFloat(m_a1.toFixed(3))} $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Heat loss by fin
      </p>
      <div id="act1-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$Q = (\\sqrt{hPKA})× \\theta_0 \× tanh(mL) = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_Q();' id='act1-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_Q() {
    let inp = (document.getElementById('act1-Q-inp'));
    console.log(Q_a1);
    if (!verify_values(parseFloat(inp.value), Q_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = (\\sqrt{hPKA})× \\theta_0 \× tanh(mL) =  ${parseFloat(Q_a1.toFixed(3))} \\ W $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Fin efficiency
      </p>
      <div id="act1-eff-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$\η = \\frac{tanh(mL)}{mL} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-eff-inp' class='form-control fs-16px' /><span style="display:contents;">%</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_eff();' id='act1-vf-btn6'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_eff() {
    let inp = (document.getElementById('act1-eff-inp'));
    console.log(effc_a1);
    if (!verify_values(parseFloat(inp.value), effc_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-eff-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ \η  = \\frac{tanh(mL)}{mL} =  ${parseFloat(effc_a1.toFixed(3))} \\ \\% $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Temp at the end
      </p>
      <p>
         $$
            \\frac{\θ}{\θ_0} = \\frac{cosh(L-x)}{cosh(mL)}
         $$
         $$
            \\frac{T_{end} - T_f}{\θ_0} = \\frac{1}{cosh(mL)}
         $$
      </p>
      <div id="act1-T-end-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-1">
               $$T_{end} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-T-end-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_T_end();' id='act1-vf-btn7'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_T_end() {
    let inp = (document.getElementById('act1-T-end-inp'));
    console.log(T_end_a1);
    if (!verify_values(parseFloat(inp.value), T_end_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-T-end-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$T_{end}=  ${parseFloat(T_end_a1.toFixed(3))} \\ \°C $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
         <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map