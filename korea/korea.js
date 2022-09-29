
//  OBJECT ARRAY OF LOCATIONS
const koreaSpots = [
{venue: 'Gwangmyeong Cave',	compass: 'W',	city: 'Gwangmyeong', province: 'Gyeonggi',	info: 'cave theme park', category: '',	korean:'광명동굴'},
{venue: 'Songdo Monster VR',	compass: 'W',	city: 'Incheon', province: 'Gyeonggi',	info: 'VR arcade', category: '',	korean:'송도 몬스터 VR'},
{venue: 'Riot Skateshop',	compass: 'W',	city: 'Bupyeong, Incheon', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'라이엇'},
{venue: 'Songdo Tri-Bowl',	compass: 'W',	city: 'Incheon', province: 'Gyeonggi',	info: 'art attraction', category: '',	korean:'트라이보울'},
{venue: 'Aramaru Observatory',	compass: 'W',	city: 'Incheon', province: 'Gyeonggi',	info: 'bridge with a view', category: '',	korean:'아라마루전망대'},
{venue: 'Ara Canal',	compass: 'W',	city: 'Incheon', province: 'Gyeonggi',	info:'', 	korean:'경인아라뱃길'},
{venue: 'Seoul Grand Park',	compass: 'W',	city: 'Gwacheon', province: 'Gyeonggi',	info: 'zoo etc near seoul land', category: '',	korean:'서울대공원분수광장'},
{venue: 'Seoul Land',	compass: 'W',	city: 'Gwacheon', province: 'Gyeonggi',	info: 'amusement park', category: '',	korean:'서울랜드'},
{venue: 'Manseok Park X Arcade',	compass: 'SW',	city: 'Suwon', province: 'Gyeonggi',	info: 'skate park', category: '',	korean:'만석공원X게임장'},
{venue: 'Suwon Hwaeseong Fortress',	compass: 'SW',	city: 'Suwon', province: 'Gyeonggi',	info: 'fortress', category: '',	korean:'수원화성'},
{venue: 'Everland',	compass: 'W',	city: 'Yongin', province: 'Gyeonggi',	info: 'amusement park', category: '',	korean:'에버랜드'},
{venue: 'Daehwa skate park',	compass: ' NW',	city: 'Goyang', province: 'Gyeonggi',	info: 'skate park', category: '',	korean:'일산 대화 레포츠 공원'},
{venue: 'Gamaksan Mountain Chulreong Bridge',	compass: 'NW',	city: 'Paju', province: 'Gyeonggi',	info: 'suspension bridge', category: '',	korean:'감악산 출렁다리'},
{venue: 'Club MODECI',	compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'클럽 MODECI'},
{venue: 'Stitches Guesthouse',	compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'hostel', category: '',	korean:'스티치스 게스트하우스'},
{venue: 'Club Sharp',	compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'클럽 샤프'},
{venue: 'Mapo Oil Tank Culture Park',	compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'art attraction', category: '',	korean:'문화비축기지'},
{venue: 'WORST SKATESHOP',	compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'WORST Skateshop'},
{venue: 'Sinchon Severance Hospital Emergency Room',	compass: 'N [W]',	city: 'Seodaemun, Seoul', 	info:'hospital', category: '',	korean:'신촌 세브란스병원 응급실'},
{venue: 'Timber Shop',	compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'팀버샵'},
{venue: 'PISTIL',	compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'PISTIL'},
{venue: 'Seoul Community Radio',	compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'서울커뮤니티라디오'},
{venue: 'Tussa Skateboards',	compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'투사스케이트보드'},
{venue: 'Cakeshop Seoul',	compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'Cakeshop Seoul'},
{venue: 'Dragon Hill Spa',	compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'jjimjilbang', category: '',	korean:'드래곤힐스파'},
{venue: 'VR Zone - I Park Mall Yongsan',	compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'VR arcade', category: '',	korean:'브이알존 용산아이파크몰점'},
{venue: 'Billion Box Itaewon',	compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'restaurant', category: '',	korean:'빌리언박스 이태원점'},
{venue: 'Liveclub Skunk',	compass: 'N [SW]',	city: 'Yeongdeungpo, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'Liveclub Skunk'},
{venue: 'Coex Aquarium',	compass: 'N [SE]',	city: 'Gangnam, Seoul', province: 'Gyeonggi',	info: 'aquarium', category: '',	korean:'코엑스아쿠아리움'},
{venue: 'VR Zone Coex Branch',	compass: 'N [SE]',	city: 'Gangnam, Seoul', province: 'Gyeonggi',	info: 'VR arcade', category: '',	korean:'브이알존 코엑스 직영점'},
{venue: 'Lotte World Aquarium',	compass: 'N [SE]',	city: 'Songpa, Seoul', province: 'Gyeonggi',	info: 'aquarium', category: '',	korean:'롯데월드 아쿠아리움'},
{venue: 'AORI skate shop',	compass: 'N [E]',	city: 'Gwangjin, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'아오리파크'},
{venue: 'Ttukseom Island Hangang Park X Arcade',	compass: 'N [E]',	city: 'Gwangjin, Seoul', province: 'Gyeonggi',	info: 'skate park', category: '',	korean:'뚝섬한강공원X게임장'},
{venue: 'Board Korea Ttukseom Branch',	compass: 'N [E]',	city: 'Gwangjin, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'보드코리아 뚝섬점'},
{venue: 'Savour Skateshop',	compass: 'N [E]',	city: 'Seongdong, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	},
{venue: 'Korean Stone Art Museum',	compass: 'N [NE]',	city: 'Seongbuk, Seoul', province: 'Gyeonggi',	info: 'art museum', category: '',	korean:'우리옛돌박물관'},
{venue: 'Green Pedal Song Joong-Ang',	compass: 'N [NE]',	city: 'Gangbuk, Seoul', province: 'Gyeonggi',	info: 'bicycle shop',	korean:'그린페달송중점'},
{venue: 'Green Pedal Gangbuk-gu Beon-dong 467-13',	compass: 'N [NE]',	city: 'Gangbuk, Seoul', province: 'Gyeonggi',	info: 'bicycle shop', category: '',	},
{venue: 'Wonju Sogeumsan Chulreong Bridge',	compass:'SW',	city:'Wonju',	province:'Gangwon', info:'suspension bridge',	korean:'원주소금산출렁다리'},
{venue: 'Byeolmaro Astronomical Observatory',	compass:'S',	city:'Yeongwol',	province:'Gangwon', info:'astro observatory	',korean:'별마로천문대'},
{venue: 'Hwanseongul Cave',	compass:'E',	city:'Samcheok',	province:'Gangwon', info:'cave w/ wateralls',	korean:'환선굴'},
{venue: 'Grasshopper Cafe',	compass:'SE',	city:'Jeongseon',  	province:'Gangwon', info:'roadside attraction',	korean:'구절리역 정선선'},
{venue: 'Phoenix Pyeongchang Snow Park',	compass:'E',	city:'Pyeongchang',	province:'Gangwon', info:'snow park	',korean:'휘닉스평창스노우파크'},
{venue: 'Reverty skate park',	compass:'NE',	city:'Yangyang',	province:'Gangwon', info:'skate park',	},
{venue: 'Ulsanbawi Rock entrance at Sinheungsa Temple',	compass:'NE',	city:'Sokcho',	province:'Gangwon', info:'mountain hike',	korean:'신흥사'},
{venue: 'Beopjusa Temple',	compass:'W',	city:'Boeun-gun',	province:'Chungbuk', info:'buddhist temple',	korean:'법주사'},
{venue: 'Chaebiwon jjimjilbang',	compass:'NE',	city:'Chungju',	province:'Chungbuk', info:'jjimjilbang',	korean:'채비원'},
{venue: 'Buseoksa Temple Ganeungile',	compass:'NE',	city:'Yeongju',	province:'Gyeongbuk', info:'buddhist temple',	korean:'부석사 가는길에'},
{venue: 'Manbulsa Temple',	compass:'SE',	city:'Yeongcheon',	province:'Gyeongbuk', info:'buddhist temple',	korean:'만불사'},
{venue: 'Gyeongju World',	compass:'SE',	city:'Gyeongju',	province:'Gyeongbuk', info:'amusement park',	korean:'경주월드'},
{venue: 'Bulguksa Temple',	compass:'SE',	city:'Gyeongju',	province:'Gyeongbuk', info:'buddhist temple',	korean:'불국사'},
{venue: 'Golgulsa Temple',	compass:'SE',	city:'Gyeongju',	province:'Gyeongbuk', info:'buddhist temple',	korean:'골굴사'},
{venue: 'Uri Charcoal Habin Charcoal Indoor Sauna Cave',	compass:'S [W]',	city:'Dalseong, Degu',	province:'Gyeongbuk', info:'jjimjilbang',	korean:'우리참숯하빈숯굴'},
{venue: 'Playground  indoor skate park',	compass:'S [E]',	city:'Jung-gu, Daegu',	province:'Gyeongbuk', info:'skate park',	korean:'플레이그라운드스케이트파크'},
{venue: 'Gimhae skatepark',	compass:'SE',	city:'Gimhae',	province:'Gyeongnam', info:'skate park',	korean:'김해스케이트파크'},
{venue: 'Monopatin skate shop',	compass:'SE [W]',	city:'Sasang-gu, Busan',	province:'Gyeongnam', info:'skate shop',	korean:'모노파틴'},
{venue: 'Songdo Marine Cable Car',	compass:'SE [SW]',	city:'Seo-gu, Busan',	province:'Gyeongnam', info:'cable car ride',	korean:'송도해상케이블카'},
{venue: 'Seokbulsa Temple',	compass:'SE [NW]',	city:'Buk-gu, Busan',	province:'Gyeongnam', info:'buddhist temple',	korean:'석불사'},
{venue: 'Beomeosa Temple',	compass:'SE [NE]',	city:'Geumjeong-gu, Busan',	province:'Gyeongnam', info:'buddhist temple',	korean:'범어사'},
{venue: 'Haedong Yonggungsa', compass:'Temple	SE [NE]',	city:'Gijang-gun, Busan',	province:'Gyeongnam', info:'buddhist temple',	korean:'해동용궁사'},
{venue: 'Jiwon Public Bath',	compass:'SE [E]',	city:'Dongnae-gu, Busan',	province:'Gyeongnam', info:'jjimjilbang',	korean:'지원탕'},
{venue: 'Oryukdo Skywalk',	compass:'SE [SE]',	city:'Nam-gu, Busan',	province:'Gyeongnam', info:'skywalk / glass bridge',	korean:'오륙도스카이워크'},
{venue: 'Hotel AquaPalace Water Park & Jjimjilbang',	compass:'SE [SE]',	city:'Suyeong-gu, Busan', province:'Gyeongnam', info:'jjimjilbang',	korean:'호텔아쿠아펠리스 워터파크 앤 찜질방'},
{venue: 'Saryangdo Passenger Terminal - Jirisan Mountain',	compass:'S',	city:'Tongyeong',	province:'Gyeongnam', info:'suspension bridge',	korean:'사량도여객선터미널'},
{venue: 'Geoje bamboo theme park',	compass:'S',	city:'Geoje',	province:'Gyeongnam', info:'bamboo forest',	korean:'거제맹종죽테마파크'},
{venue: 'Geoje botanical garden',	compass:'S',	city:'Geoje',	province:'Gyeongnam', info:'botanical garden',	korean:'거제식물원'},
{venue: 'Guryong Village Bamboo Forest',	compass:'N',	city:'Damyang-gun',	province:'Jeonnam', info:'bamboo forest',	korean:'죽녹원'},
{venue: 'Hampyeong Expo Park Butterfly Insect Eco Center',	compass:'NW',	city:'Hampyeong-gun',	province:'Jeonnam', info:'insect + reptile zoo',	korean:'함평엑스포공원나비곤충생태관'},
{venue: 'Hwasun Unjusa Temple',	compass:'C',	city:'Hwasun-gun',	province:'Jeonnam', info:'buddhist temple',	korean:'화순운주사'},
{venue: 'Songgwangsa Temple Guksajeon Hall',	compass:'SE',	city:'Suncheon',	province:'Jeonnam', info:'buddhist temple',	korean:'송광사국사전'},
{venue: 'Jeonju Hanok Village',	compass:'N',	city:'Jeonju',	province:'Jeonbuk', info:'old town village',	korean:'전주 한옥마을'},
{venue: 'Korean house (Hanguk Jip) bibimap',	compass:'N',	city:'Jeonju',	province:'Jeonbuk', info:'restaurant',	korean:'한국집'},
{venue: 'Geumgang Suspension Bridge',	compass:'N',	city:'Jeonju + Wanju-gun',	province:'Jeonbuk', info:'suspension bridge',	korean:'금강구름다리'},
{venue: 'Daejeon Museum of Art',	compass:'SE',	city:'Seo-gu, Daejeon',	province:'Chungnam', info:'art museum',	korean:'대전시립미술관'}
]


// LOCATIONS FILTERED BY CATEGORY
const zoos = koreaSpots.filter(zoo => zoo.info.includes('zoo') || zoo.info.includes('aquarium'))
const skateParks = koreaSpots.filter(skate => skate.info.includes('skate') && !skate.info.includes('shop'))
const skateShops = koreaSpots.filter(skate => skate.info.includes('skate') && skate.info.includes('shop'))
const musicVenues = koreaSpots.filter(music => music.info === "music venue")
const artVenues = koreaSpots.filter(art => art.info.includes('art'))
const buddhistTemples = koreaSpots.filter(buddhist => buddhist.info.includes('temple'))



// LOCATION CATEGORY VARIABLES
const temples = document.querySelector('#temples');
temples.addEventListener('click',postTemples)
const skateparks = document.querySelector('#skateparks');
skateparks.addEventListener('click', postSkateParks)
const skateshops = document.querySelector('#skateshops');
skateshops.addEventListener('click', postSkateShops)
const musicvenues = document.querySelector('#musicvenues');
musicvenues.addEventListener('click', postMusicVenues)
const artvenues = document.querySelector('#artvenues');
artvenues.addEventListener('click', postArtVenues)
const zoosAquariums = document.querySelector('#zoos');
zoosAquariums.addEventListener('click', postZoosAquariums)


// FUNCTION FOR SELECT OBJECTS PROVINCE FILTERING
var provinceChoice
const provinces = document.querySelector('#provinces')
provinces.addEventListener('click', () => {
    e = document.getElementById('provinces')
    provinceChoice = e.options[e.selectedIndex].value.toLowerCase();
    if (document.querySelector('.province-check')) 
    {document.querySelector('.province-check').remove()}
    const provAdd = document.createElement('div')
    provAdd.classList.add('province-check')
    provAdd.classList.add(`${provinceChoice}`) 
    document.body.appendChild(provAdd)
})


// FUNCTION FOR TEMPLE CATEGORY
function postTemples() {
        //VARIABLE FOR PROVINCES
    provCheck = document.querySelector('.province-check')
    if(temples.checked == true ) {
        //CREATE DIV WITH 'TEMPLES' CLASS
        const templesList = document.createElement('div')
        templesList.classList.add('temples')
        document.body.appendChild(templesList)
        templesList.innerHTML = `<b>Buddhist Temples</b><br>`
        //CYCLE THROUGH TEMPLE RESULTS
        for(let i=0; i<= buddhistTemples.length; i++) { 
        // VARIABLE FOR RESULTS' INDIVIDUAL PROVINCE RESULTS
            current = buddhistTemples[i].province.toLowerCase()
            
        //FILTER TEMPLE RESULTS BY PROVINCE BY MATCHING VARIABLES
            if (provCheck.classList.contains(current) || provCheck.classList.contains('all') ) {
            //'RESULT' CLASS ADDED TO TRIGGER RESULT-FILLED RESPONSE    
            provCheck.classList.add('result')
            // output of results
            templesList.innerHTML += `${buddhistTemples[i].venue}, ${buddhistTemples[i].province}, ${buddhistTemples[i].city}<br>`
            }
        }   // for loop ends
} 
// UNCHECKED BOX REMOVES RESULTS LIST
else {
    const templesList = document.querySelector('.temples')
    templesList.remove()
}
}


// if  (!provCheck.classList.contains("result")) {
//     templesList.innerHTML += 'there are no results for this province'}

// FUNCTION FOR SKATE PARK CATEGORY
function postSkateParks() {
    if(skateparks.checked == true) {
        const skateParksList = document.createElement('div')
        skateParksList.classList.add('skateparks')
        document.body.appendChild(skateParksList)
        skateParksList.innerHTML = `<b>Skate Parks</b><br>`




        for(let i=0; i<= skateParks.length; i++) {

         
            current = skateParks[i].province.toLowerCase()
            console.log(current)
            provCheck = document.querySelector('.province-check')

            if (
            provCheck.classList.contains(current) || provCheck.classList.contains('all')
            ) {

        skateParksList.innerHTML += `${skateParks[i].venue}, ${skateParks[i].province}, ${skateParks[i].city}<br>`
            }
    }  
    } else {
        const skateParksListRemove = document.querySelector('.skateparks')
        skateParksListRemove.remove()
    }
}
// FUNCTION FOR SKATE SHOP CATEGORY
function postSkateShops() {
    if(skateshops.checked == true) {
        const skateShopsList = document.createElement('div')
        skateShopsList.classList.add('skateshops')
        document.body.appendChild(skateShopsList)
        skateShopsList.innerHTML = `<b>Skate Shops</b><br>`
        for(let i=0; i<= skateShops.length; i++) {

            current = skateShops[i].province.toLowerCase()
            console.log(current)
            provCheck = document.querySelector('.province-check')

            if (
            provCheck.classList.contains(current) || provCheck.classList.contains('all')
            ) 
            {
        skateShopsList.innerHTML += `${skateShops[i].venue}, ${skateShops[i].province}, ${skateShops[i].city}<br>`
    }
}
    } else {
        const skateShopsListRemove = document.querySelector('.skateshops')
        skateShopsListRemove.remove()
    }
}
// FUNCTION FOR MUSIC CATEGORY
function postMusicVenues() {
    if(musicvenues.checked == true) {
        const musicVenuesList = document.createElement('div')
        musicVenuesList.classList.add('musicvenues')
        document.body.appendChild(musicVenuesList)
        musicVenuesList.innerHTML = `<b>Music Venues</b><br>`
        for(let i=0; i<= musicVenues.length; i++) {

            current = musicVenues[i].province.toLowerCase()
            console.log(current)
            provCheck = document.querySelector('.province-check')

            if (
            provCheck.classList.contains(current) || provCheck.classList.contains('all')
            ) 
            {
        musicVenuesList.innerHTML += `${musicVenues[i].venue}, ${musicVenues[i].province}, ${musicVenues[i].city}<br>`
    }
}
    } else {
        const musicVenuesListRemove = document.querySelector('.musicvenues')
        musicVenuesListRemove.remove()
    }
}

// FUNCTION FOR ART CATEGORY
function postArtVenues() {
    if(artvenues.checked == true) {
        const artVenuesList = document.createElement('div')
        artVenuesList.classList.add('artvenues')
        document.body.appendChild(artVenuesList)
        artVenuesList.innerHTML = `<b>Art Venues</b><br>`
        for(let i=0; i<= artVenues.length; i++) {

            current = artVenues[i].province.toLowerCase()
            console.log(current)
            provCheck = document.querySelector('.province-check')

            if (
            provCheck.classList.contains(current) || provCheck.classList.contains('all')
            ) {
        artVenuesList.innerHTML += `${artVenues[i].venue}, ${artVenues[i].province}, ${artVenues[i].city}<br>`
    }
}
    } else {
        const artVenuesListRemove = document.querySelector('.artvenues')
        artVenuesListRemove.remove()
    }
}

// FUNCTION FOR ZOO CATEGORY
function postZoosAquariums() {
    if(zoosAquariums.checked == true) {
        const zooList = document.createElement('div')
        zooList.classList.add('zoosAquariums')
        document.body.appendChild(zooList)
        zooList.innerHTML = `<b>Zoos & Aquariums</b><br>`
        for(let i=0; i<= zoos.length; i++) {

            current = zoos[i].province.toLowerCase()
            console.log(current)
            provCheck = document.querySelector('.province-check')

            if (
            provCheck.classList.contains(current) || provCheck.classList.contains('all')
            ) {

        zooList.innerHTML += `${zoos[i].venue}, ${zoos[i].province}, ${zoos[i].city}<br>`
    }
}
    } else {
        const zooListRemove = document.querySelector('.zoosAquariums')
        zooListRemove.remove()
    }
}
