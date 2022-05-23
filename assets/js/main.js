const size = document.getElementById('input_size')
const alter = document.getElementById('input_alter')
const weight = document.getElementById('input_weight')
const female = document.getElementById('radio_female')
const male = document.getElementById('radio_male')
const palFaktor = document.getElementById('pal_faktor')

const output_grund_kcal = document.getElementById('output_grund_kcal')
const output_grund_kJ = document.getElementById('output_grund_kJ')

const output_gesamt_kcal = document.getElementById('output_gesamt_kcal')
const output_gesamt_kJ = document.getElementById('output_gesamt_kJ')

const calculate = () => {

    if (size.value == '' || alter.value == '' || weight.value == '') {
        alert('Geben Sie eine Körpergröße,Alter oder ein Gewicht ein!')
    } else {
        let grundUmsatz, grundUmsatzkj, gesamtUmsatz, gesamtUmsatzkj;
        if (female.checked) {
            grundUmsatz = 665.1 + (9.6 * weight.value) + (1.8 * size.value) - (4.7 * alter.value);
        } else {
            grundUmsatz = 664.7 + (13.7 * weight.value) + (5 * size.value) - (6.8 * alter.value);
        }
        output_grund_kcal.innerHTML = (grundUmsatz / 1000).toFixed(3);
        gesamtUmsatz = grundUmsatz * Number(palFaktor.value);
        output_gesamt_kcal.innerHTML = (gesamtUmsatz / 1000).toFixed(3);
        grundUmsatzkj = grundUmsatz * 4.1868;
        output_grund_kJ.innerHTML = (grundUmsatzkj / 1000).toFixed(3);
        gesamtUmsatzkj = gesamtUmsatz * 4.1868;
        output_gesamt_kJ.innerHTML = (gesamtUmsatzkj / 1000).toFixed(3)
    }

}