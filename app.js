const form = document.querySelector('#searchForm');
const res = document.querySelector('#resTable');
const cont=document.getElementById("allContaint");
var upd;

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const ctype=form.elements.coinType.value;
    cont.classList.add('mainClick');
    cont.classList.remove('main');
    fetchPrice(ctype);

});

const fetchPrice = async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    showPrice(r.data.coin);
}
const showprice=(coinData)=>{
    const price=coinData.price;
    const vol=coinData.volume;
    const change=coinData.pricechange1d;
    const coin=coinDataname;
    const curr='USD';
    var col="green";
    if(change<0){
        col="red";
    }
   
    res.innerHTML=`<tr class="bg-primary" style="color:white;">
    <td>
        property
    </td>
    <td>value</td>
</tr>
<tr>
    <td>
        ${coin}
    </td>${col};"><span style="font-size: 1.3em;">${price}</span> ${curr}</td>
</tr>
<tr>
    <td> Volume(24hrs)</td>
    <td >${vol}</td>
</tr>
<tr>
     <td> Change(24hrs)</td>
     <td style="color:${col};">${change} ${curr}</td>
</tr> `;
};    
        
