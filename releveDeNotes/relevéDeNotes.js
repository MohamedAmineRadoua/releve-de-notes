btn=document.getElementById('btn')

btn.addEventListener('click',function(){
let TEC1=document.getElementById('TEC1')
let TEC2=document.getElementById('TEC2')
let AR1=document.getElementById('AR1')
let AR2=document.getElementById('AR2')
let FR1=document.getElementById('FR1')
let FR2=document.getElementById('FR2')
let ANG1=document.getElementById('ANG1')
let ANG2=document.getElementById('ANG2')
let MU1=document.getElementById('MU1')
let MTEC=document.getElementById('MTEC')
let MCTEC=document.getElementById('MCTEC')
let MAR=document.getElementById('MAR')
let MCAR=document.getElementById('MCAR')
let MFR=document.getElementById('MFR')
let MCFR=document.getElementById('MCFR')
let MANG=document.getElementById('MANG')
let MCANG=document.getElementById('MCANG')
    MTEC.innerHTML=((TEC1.value/2+TEC2.value/2))
    MCTEC.innerHTML=(TEC1.value/2+TEC2.value/2)*10
    MAR.innerHTML=((AR1.value/2+AR2.value/2))
    MCAR.innerHTML=(AR1.value/2+AR2.value/2)*10
    MFR.innerHTML=((FR1.value/2+FR2.value/2))
    MCFR.innerHTML=(FR1.value/2+FR2.value/2)*10
    MANG.innerHTML=((ANG1.value/2+ANG2.value/2))
    MCANG.innerHTML=(ANG1.value/2+ANG2.value/2)*10
    let MU1T=(TEC1.value/2+TEC2.value/2+AR1.value/2+AR2.value/2+FR1.value/2+FR2.value/2+ANG1.value/2+ANG2.value/2)/4
    MU1.innerHTML=MU1T



let DM1=document.getElementById('DM1')
let DM2=document.getElementById('DM2')
let PM1=document.getElementById('PM1')
let PM2=document.getElementById('PM2')
let MDM=document.getElementById('MDM')
let MCDM=document.getElementById('MCDM')
let MPM=document.getElementById('MPM')
let MCPM=document.getElementById('MCPM')
let MU2=document.getElementById('MU2')
    let MDMT=((DM1.value/2+DM2.value/2))
    MDM.innerHTML=MDMT
    let MCDMT=(DM1.value/2+DM2.value/2)*30
    MCDM.innerHTML=MCDMT
    let MPMT=((PM1.value/2+PM2.value/2))
    MPM.innerHTML=MPMT
    let MCPMT=(PM1.value/2+PM2.value/2)*50
    MCPM.innerHTML=MCPMT
    let MU2T=(MCDMT+MCPMT)/80
    MU2.innerHTML=MU2T


let SRI1=document.getElementById('SRI1')
let SRI2=document.getElementById('SRI2')
let EEJ1=document.getElementById('EEJ1')
let EEJ2=document.getElementById('EEJ2')
let M1=document.getElementById('M1')
let M2=document.getElementById('M2')
let AP1=document.getElementById('AP1')
let AP2=document.getElementById('AP2')
let MSRI=document.getElementById('MSRI')
let MCSRI=document.getElementById('MCSRI')
let MEEJ=document.getElementById('MEEJ')
let MCEEJ=document.getElementById('MCEEJ')
let MM=document.getElementById('MM')
let MCM=document.getElementById('MCM')
let MAP=document.getElementById('MAP')
let MCAP=document.getElementById('MCAP')
let MU3=document.getElementById('MU3')
    MSRI.innerHTML=((SRI1.value/2+SRI2.value/2))
    let MCSRIT=(SRI1.value/2+SRI2.value/2)*20
    MCSRI.innerHTML=MCSRIT
    MEEJ.innerHTML=((EEJ1.value/2+EEJ2.value/2))
    let EEJT=(EEJ1.value/2+EEJ2.value/2)*10
    MCEEJ.innerHTML=EEJT
    MM.innerHTML=((M1.value/2+M2.value/2))
    let MCMT=(M1.value/2+M2.value/2)*15
    MCM.innerHTML=MCMT
    MAP.innerHTML=((AP1.value/2+AP2.value/2))
    let MCAPT=(AP1.value/2+AP2.value/2)*35
    MCAP.innerHTML=MCAPT
    let MU3T=(EEJT+MCSRIT+MCMT+MCAPT)/(20+10+15+35)
    MU3.innerHTML=MU3T


let MS=document.getElementById('MS')
    let MST=(MU3T*80+MU2T*80+MU1T*40)/200
    MS.innerHTML=MST

    



})









