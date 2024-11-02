let countryselectbox = document.querySelector('#country')
let cityselectbox = document.querySelector('#city')
let buybutton = document.querySelector('.button')
buybutton.addEventListener('click', function()
{{
    alert('بلیط شما خرید شد!')
}})
let countrysdata = 
{
    Iran:['Tehran' , 'shiraz' , 'esfehan' , 'Mashhad'],
    us:['shikago' , 'LA' , 'kalifornia' , 'yota'],
    England:['Londen' , 'Liverpol' , 'Manchester' , 'Chelse'],
    Germany:['Dortmond' , 'Monikh' , 'Veian' , 'monshen'],
    Frenche:['Paris' , 'lion' , 'marcey' , 'mompoli'],
}
countryselectbox.addEventListener('change' , function()
{
    let maincountryname = countryselectbox.value 
    let maincountrycity = countrysdata[maincountryname]
    cityselectbox.innerHTML = ''
    maincountrycity.forEach(function(city)
{
    cityselectbox.innerHTML += '<option>' + city + '</option'
});
})