let cevap = prompt('Hoşgeldin yolcu. Maceraya çıkmaya hazır mısın? -Evet -Hayır');

if (cevap === 'Evet') {
  console.log('Buna sevindim yolcu! Başlayalım.');
  
  let nereye = prompt('Sabah kalktığında, dışarıda parlak bir güneş seni selamlıyor. Bugün bir keşfe çıkmaya karar verdin. Ama acaba nereye gitmelisin? -Ormana -Deniz kenarına');
  
  if (nereye === 'Ormana') {
    console.log('Ormana gittiğin harika bir yolculuk seni bekliyor.');

    let ormanYol = prompt('Ormana gittin. Karşına iki yol çıktı sağdan mı gidersin soldan mı? -Sağ -Sol');
    if (ormanYol === 'Sağ') {
      console.log('Sağdan gitmeyi tercih ettin. Karşına çok büyük bir alan çıktı. Bu büyük alan içinde köy var.');
      
      let sag = prompt('Büyük bir karmaşa var köyde. Katip ve kasap var yanında. Hangisine soru sormak istersin? -Katip -Kasap');
      if (sag === 'Kasap') {
        console.log('Kasaba sordun. Kasap sinirli ve manyak biriydi. Seni kovaladı ve öldürdü. Bir daha dene yolcu..');
      } else if (sag === 'Katip') {
        console.log('Katip oradaki en bilgili kişiydi. Seni bilgilendirdi ve köyden ayrılman gerektiğini söyledi.');

        let lastSecenek = prompt('-Ayrıl -Kal?');
        if (lastSecenek === 'Ayrıl') {
          console.log('Ayrılmaya kalktığın sırada köylüler seni fark etti ve kafana taş vurarak bayılttılar. Uyandığında her şeyin bir kabus olduğunu fark ettin yolcu.. Geçmiş olsun.');
        } else if (lastSecenek === 'Kal') {
          console.log('Kalmaya karar verdin ve yanındaki kasap seni bir güzel akşam yemeği yaptı. Tam pişmeden uyandın yolcu. Her şey bir kabustu. Geçmiş olsun..');
        } else {
          console.log('Lütfen geçerli bir cevap seç.');
        }

      } else {
        console.log('Lütfen geçerli bir cevap seç.');
      }
    
    } else if (ormanYol === 'Sol') {
      console.log('Soldan gitmeyi tercih ettin. Çok daha sakin bir yolculuk seni bekliyor gibi gözüküyor. Doğayı dinleyerek yürümeye başladın. Dinlenmek için çadır kurmak mı?');

      let sol = prompt('Akşam da yola devam etmek mi? -Devam et -Dinlen');
      if (sol === 'Devam et') {
        console.log('Devam ettin ve bir ayıya yem olarak öldün. Geçmiş olsun yolcu.');
      } else if (sol === 'Dinlen') {
        console.log('Dinlenmek iyi geldi. Derin bir uykuya daldın ve uyandın. Uyandığında her şeyin bir rüya olduğunu fark ettin. Geçmiş olsun yolcu.');
      } else {
       console.log('Lütfen geçerli bir cevap seç.');
      }
    } else {
      console.log('Lütfen geçerli bir cevap seç.');
    }

  } else if (nereye === 'Deniz kenarına') {
     console.log('Deniz kenarına gittiğin güzel bir gün seni bekliyor.');
    
     let patika = prompt('Deniz kenarında bir patika var bulunduğun bölgenin içine giden. Deniz kenarında mı kalmak istiyorsun içeri mi girmek istiyorsun? -Kal -Gir');
     if (patika === 'Kal') {
      console.log('Burada kalmak mükemmel bir fikir oldu. Denizden geçen tatbikat gemileri seni fark etti ve oradan kurtuldun. Yolculuk sırasında uyandın ve hepsinin bir rüya olduğunu fark ettin. Geçmiş olsun yolcu.');
     }else if (patika === 'Gir') {
      console.log('Deniz kenarı hikayenin kısa bir bölümüydü yolcu. Sen içeri de girmeyi tercih ederek daha korkunç bir hale getirdin. Kabile üyeleri tarafından cızbız oldun yolcu. Uyandın ancak acısını hissetmiş olmalısın. Geçmiş olsun.');
     }else {
      console.log('Lütfen geçerli bir cevap seç.')
     }
  } else {
    console.log('Lütfen geçerli bir cevap seç.');
  }

} else if (cevap === 'Hayır') {
  console.log('Bir dahaki sefere görüşmek üzere yolcu!');
} else {
  console.log('Lütfen geçerli bir cevap seç.');
}


//Tüm kodlar bana ait. Kodların düzenini biraz bozmuştum. iç içe yazılan kısımlarda kafam karıştı ve nedenini gpt den yardım aldım. Onun haricinde HER ŞEY BANA AİT!! :D