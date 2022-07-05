export default function copiar(){
    let d = document,
        $button = d.getElementById('copiar'),
        $input = d.getElementById('email-input');

    $button.addEventListener('click', ()=>{
        $input.focus();
        console.log($input);
        d.execCommand('selectAll');
        d.execCommand('copy');
        console.log('a')
    })
}