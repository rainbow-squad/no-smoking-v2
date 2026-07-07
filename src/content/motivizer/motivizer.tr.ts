import { B, NL } from "../dialogs/constants";

const motivations: string[] = [
  `
    Motivasyon mesajları her uzun molada görünür
    ve bunu neden yaptığımızı hatırlatmak için tasarlanmıştır.
  `,
  `
    Muhtemelen her sigara içenin bir sigarayla mahvolmuş sevdiği bir eşyası vardır.
    Biri ceketini yaktı, bir diğeri sevdiği elbiseyi, ya da arabanın beyaz tavanı sarardı.
    Ve hepsi bu aptal alışkanlık yüzünden!
  `,
  `
    İnsanların "para karşılığı" sigara içmesinin ne kadar eski olduğunu biliyor musunuz? 16. yüzyıldan beri!
    Evet, o zamanlar bile insanlara tütün satılmaya başlandı.
    İnsanların sağlığı üzerine kurulu inanılmaz derecede kârlı bir iş.
  `,
  `
    Tütün endüstrisinin ana hedef kitlesi 15-25 yaş arası insanlardır.
    Çünkü bu yaşta sigara içmeye başlayan biri muhtemelen bırakmaz.
    Tütün her yerde gençlik etkinliklerinde reklamı yapılır, çeşitli mitlerle popülerleştirilir.
    Örneğin alkol sonrası sigara içmenin "daha harika" hissettirdiği iddiası.
    Sadece tütün alkol sonrası vücuda daha sert çarptığı için böyle hissettiriyor.
    Bu yüzden bu yaş grubunda olmasanız bile unutmayın:
    tütün hakkında söylenen her olumlu şey sadece reklamdır.
  `,
  `
    İnsanlar sigara içenleri sık sık rahatsız edici buluyor. Hiç düşündünüz mü, sigara içen biri sigara içmeyenin gözünde nasıl görünüyor?
    Şöyle: "Yetişkin, akıllı bir insan saatte bir masasından kalkıyor, dışarı çıkıyor,
    beş dakika boyunca ağzına bir kalem koyuyor ve duman üflüyor."
    Kulağa garip geliyor, değil mi? Ama bizi tam olarak böyle görüyorlar.
  `,
  `
    Bir damla nikotin bir atı öldürür — bu bir gerçek. Sigara içtiğimizde nikotin soluyoruz.
    Bizim için o kadar ölümcül değil, ama üç temel alana zarar verdiğini unutmayın:
    kalp, dolaşım sistemi ve vücudun tümörlere karşı savunması.
    Tıbbi bakımın her geçen gün pahalandığı günümüzde
    bu kadar ciddi hastalıklara yakalanma riskine girmek anlamsız.
  `,
  `
    Faydalı bir egzersiz sigara içmemeyi pratik yapmak olabilir.
    İş arkadaşlarınız veya arkadaşlarınızla her zamanki gibi dışarı çıkın.
    Ama herkes sigarasını yakarken siz yakmayın.
    Neden içmediğinizi sorarlarsa sadece "istemiyorum" deyin.
    Bu iş arkadaşlarınızı eğlendirebilir, o kadar.
    Ama sizin için alışkanlık üzerinde bir zafer daha olacak.
  `,
  `
    Sigara içenler sigara içmeyenlerle nadiren iyi geçinir. Sigara kokusu itici.
    Üstelik sigara içenler sigara içmeyenlerden çok daha az.
    Sadece bu aptal alışkanlık yüzünden kaç insanın sizi hayatından çıkardığını bir düşünün!
  `,
  `
    Bir sigara yaktığınızda 4.000'den fazla kimyasal madde salınır.
    Sigaranın erken ölümün başlıca nedenlerinden biri olması şaşırtıcı değil.
    "Erken ölüm" kelimelerinin anlamını bir düşünün.
    Hayatta bu kadar çok planınız var — arkadaşlar, aile, hedefler. Hayatı ilginç kılmak için her şeyi yapıyorsunuz.
    Ve sonra aniden "bam" — gidiyorsunuz.
    Oysa uzun ve mutlu yaşayabilirdiniz. Üstelik bunun için para da ödediniz.
  `,
  `
    Fıkra: Sigara içenler neden her zaman çakmak taşır?
    Çünkü yıldırım çarpma ihtimalleri sigarayı bırakma ihtimallerinden daha yüksek!
  `,
  `
    Sigarayı bırakanların kilo aldığı fikri bir efsanedir.
    Kilo almaya yatkın olsanız bile — yine de bir efsane.
    Vakaların %99'unda insanlar uzanarak yedikleri veya aşırı miktarda tatlı ve hamur işi tükettikleri için kilo alır.
    Ne yediğinize dikkat edin.
    Sigaranın dişlere zarar verdiği ise gerçek.
  `,
  `
    Tüm nikotin ikame ürünleri bir yalandır.
    Bantlar, haplar, vaplar — bunlar sadece başka bir sigara türüdür.
    Tütün endüstrisinin ne kadar yaratıcı olduğuna şaşırırsınız!
    Size şişelerde sigara, araba kokusu olarak sigara, tütün kokulu parfüm satacaklar.
    Ve "Böyle sigarayı bırakıyorsunuz" diyecekler.
    Bu endüstri çılgın paralar kazanıyor. Sizi bağımlı tutmak için her şeyi yapacaklar!
  `,
  `
    Dünyada sigara içilmeyen sayısız mekan var.
    Sigara içenler sigara içmek için "dışarı" çıkıyor ya da özel "sigara içme odalarına" gidiyor.
    Hiç dışarıdan nasıl göründüğünü düşündünüz mü?
    "Kötü kokan bağımlılar için akvaryum" gibi.
    Bu ayrımcılık bile değil — sadece bu alışkanlığı olmayan insanlar
    buna her zaman katlanmak istemez.
  `,
  `
    Sigara içmeyen aile üyeleriniz, arkadaşlarınız, sevdikleriniz — alışkanlıklarınızdan bağımsız olarak sizi seviyor.
    Sigara içtikten sonra ağzınız sigara koksa bile bunu anlayışla karşılıyorlar.
    Peki neden onları zarara uğratıyorsunuz? Bu sadece anlamsız.
    Sigarayı bırakmaya çalışmanızın nedeni de bu.
  `,
  `
    Fıkra:
    Sigara içenler neden hiç kaybolmaz?
    Çünkü her zaman "sigara içmek yasaktır" tabelalarını takip ederler!
  `,
  `
    Sigara içenlerin tat alma duyuları alışkanlıktan zarar görür.
    Yiyeceklerin tadını tam olarak alamazlar.
    Parfüm kokusunu tam olarak hissedemezler.
    Bazen asfalttaki benzin kokusu bile inanılmaz bir anı dalgası yaratabilir —
    ama siz hâlâ sigara içerken değil.
    Bırakın. Anlamsız bir alışkanlık.
  `,
  `
    Bir paket sigaranız ne kadar tutuyor? Bu sizin paranız! Sadece sizin.
    İstediğiniz her şeye harcayabilirdiniz, ama bunun yerine tütün endüstrisine veriyorsunuz.
    Mesele şu — bunu yazın bir karpuz alır gibi harcamıyorsunuz.
    Onları size alıştırdıkları bir alışkanlık yüzünden veriyorsunuz.
    Ama bu saçma değil mi?
  `,
  `
    Sigarayı bırakan herkesin kendine özgü en önemli bir nedeni vardır.
    Her zaman sizinkini hatırlayın.
    Bu size yardımcı olacak. Bunu neden yaptığınızın ana nedenine odaklandığınızda bırakmak çok daha kolay olur.
  `,
  `
    Sigarayı bırakmak için basit bir neden gibi görünebilir,
    ama sigara içmeyen birinin beyni sigara içerkeninkinden üç kat daha iyi çalışır.
    Üç kat daha akıllı ve hızlı olabilirsiniz!
    Sadece ihtiyacınız olmayan bir şey için para ödemeyi bırakmanız gerekiyor.
  `,
  `
    Sigara içen insanlarla yaşıyor veya çalışıyorsanız bu bir sorun olmak zorunda değil.
    Onlarla her zamanki gibi dışarı çıkabilirsiniz.
    Ama sigara içme zamanınız gelmemişse — içmeyin.
    Bir nefes bile almayın. Ne anlamı var?
    Sadece programınıza uyun, hepsi bu.
  `,
  `
    Bu arada, çok da uzun zaman önce değil, tütün endüstrisi gençleri çekmenin bir yolunu buldu.
    Gençler arasında sigara içmek cool sayılmıyordu, bu yüzden vapları icat ettiler —
    tatlı kokulu buhar üflemenizi sağlayan inanılmaz bir "mucize".
    Sigaradan bile daha kötü sonuçlandı ve diyabete yol açtı.
    Diyabete yakalanan insanlara kim tazminat ödedi sanıyorsunuz?
    Tütün endüstrisinin tamamı başkalarının sağlığından para kazanmak için tasarlanmıştır.
  `,
  `
    Sigara içmeyenlerin cildi daha iyi. Neden? Çünkü sürekli kimyasal zehirlenmeden etkilenmiyorlar.
    Ve bunu takdir etmek için genç bir kadın olmak zorunda değilsiniz.
    Olgun bir erkeğin sağlıklı teni, yaşlanan ve sürekli yorgun görünen bir sigara içenin gri teninden çok daha çekici.
  `,
  `
    Sigarayı bırakırsanız kıyafetleriniz artık tütün kokusuna bulanmaz,
    saçlarınız artık tütün kokusuna bulanmaz,
    elleriniz artık tütün kokusuna bulanmaz.
  `,
  `
    Bir ara sigara içen bir grup insanı gözlemleyin.
    Çöp kutusunun yanında ya da sigara içme odasında duruyorlar.
    Tamamen normal, sıradan insanlar duman üflüyor, para ve sağlıklarını harcıyor,
    sadece sigara kokusuna bulanmak için.
    Yakında sigarayı bırakacaksınız ve onlardan biri olmayacaksınız. Çok yakında.
  `,
  `
    Kulağa garip gelebilir, ama sigarayı şimdi bırakmak sonradan bırakmaktan çok daha kolay.
    Bilimsel olarak kanıtlanmış psikolojik bir gerçek.
    Sigarayı bırakmaya karar veren biri bunu yapabilir.
    Ama bu yoldan sapılırsa bırakmak daha sonra zorlaşır — psikolojik olarak.
    "Çok da fazla para değil" ya da "Yıllardır içiyorum ve iyiyim" gibi düşünmeye başlar.
    Sigarayı bırakmaya zaten karar verdiniz.
    Şimdi bunun için en iyi zaman. Durmayın!
  `,
  `
    Başkalarına örnek olacaksınız. Siz bırakırsanız eşiniz veya partneriniz de bırakabilir, arkadaşlarınız da.
    Eskisi gibi aynı zamanı birlikte geçirecek, her zamanki gibi sohbet edeceksiniz.
    Her şey aynı olacak — sadece elinizde sigara olmayacak.
  `,
  `
    Sigarayı günlük aktivitelerle nasıl ilişkilendirdiğimize dair bir fıkra.
    Bir adam 20 yıl sonra sigarayı bıraktığını gururla duyurdu.
    Arkadaşı nasıl yaptığını sordu.
    "Basit," dedi. "Artık sadece kahve içerken sigara içiyorum."
    "Peki?"
    "Çaya geçtim."
  `,
  `
    Sigara hafızaya zarar verir. Sigarayı bırakırsanız akşamları bir fincan çay veya kahve eşliğinde
    değerli anları hatırlayabilirsiniz.
    Çocukluk olaylarını ayrıntılarıyla, mezuniyetinizi veya sevdiğiniz köpeğinizle yürüyüşleri hatırlayacaksınız.
    Kendinize daha fazla, rutine daha az zaman ayıracaksınız.
    Düşünceleriniz daha pozitif olacak. Sigara sizi ağırlaştırıyor.
  `,
  `
    Sigara içmeyen biri daha enerjik ve dinç.
    Hayatta daha aktif, daha canlı bir cinsel yaşama sahip,
    daha çeşitli ve dinamik planları var.
    Sigara içmeyen biri kolayca çoklu görev yapabilir.
  `,
  `
    Kendinize sigaranın sadece bir alışkanlık olduğunu hatırlatmaya başlayın.
    Alışkanlık ile bağımlılık arasındaki fark çok basit.
    Bunu yapmaya alıştınız. Ama aniden yapmazsanız — hiçbir şey değişmez.
    Kesinlikle hiçbir şey.
  `,
  `
    Özellikle hava değişikliklerinde baş ağrısı çekiyorsanız sigara bunun nedeni olabilir.
    Evet, sigaralar kan damarlarını daraltır. Yıllar içinde biriken kolesterolü ekleyin,
    bir de atmosfer basıncını — ve bu neredeyse garantili bir baş ağrısı.
    Bunu neden isteyesiniz ki?
  `,
  `
    Sigaranız bitti ve içmediniz.
    Kısa bir süre sonra sinirli ve huzursuz hissetmeye başlıyorsunuz — garip, değil mi?
    Hayatının tam kontrolünde olması gereken biri için
    her büfede sakız gibi satılan bir şeye bağımlı olmak.
    Hem garip hem de can sıkıcı.
  `,
  `
    Pek çok insan "kronik stresim olduğu için sigara içiyorum" diyor.
    Stres tamamen ayrı bir konu, dostum.
    Stres altındaysanız — ister işten ister evden olsun — yeni bir şey icat etmiyorsunuz.
    İnsanlar bununla insanlık tarihi boyunca mücadele ediyor.
    Bu yüzden stresi yaratan şeyi düzeltmek için tamamen makul yaklaşımlar var.
    Bu sizin için geçerliyse konuyu internette araştırmaya zaman ayırın.
    Çok az çabayla hayatınızı ne kadar iyileştirebileceğinize şaşıracaksınız.
  `,
  `
    Bu arada, "Son Uçuş" adında harika bir fikir var.
    Sigarayı bırakan biri, boş bir sigara paketini çöpe atarken elinde sigara ve paket havadayken fotoğrafını çektiriyor.
    "Son paket" olmak zorunda bile değil. Bu fotoğrafı şimdi bile çekebilirsiniz.
    Sigarayı tamamen bıraktığınızda fotoğrafı yazdırın, çerçeveleyin ve rafa koyun.
    Bu, alışkanlıklarınız üzerinde ne kadar güçlü olduğunuzun sembolü. Sizin zaferiniz.
  `,
  `
    Küresel istatistikler: dünyada her altı saniyede bir kişi tütün tüketiminden kaynaklanan hastalıklardan ölüyor —
    bu yılda 3,5 milyon kişi.
    Bunun bir parçası olmak ister misiniz?
  `,
  `
    Sigara içenlerin neden daha düşük yaşam kalitesine sahip olduğu söylenir?
    Çünkü sigara içenler sigara içmeyenleri sık sık uzaklaştırır. Sigara içenler sık sık alkol de kullanır.
    Sigara içmeyenler arasında başarılı insanlar çoktur, ama sigara içenler arasında
    hayatta zorlanan ve aşırı içki içen pek çok kişi bulunur.
    Ve mantıklı olarak — arkadaşlarınız kısmen yaşam kalitenizi belirler.
  `,
  `
    "Sigara Arkadaşları" adında temel bir kural var.
    Alkol içerken sigara içme alışkanlığınız varsa — içkiyi tamamen bırakın.
    Kahve içerken sigara içiyorsanız — çaya geçin.
    Bırakması kolay olan sigara ilişkilendirmelerini kırın.
    Sigarayı bıraktıktan sonra sevdiğiniz kahveyi eskisi gibi içebileceksiniz.
    Ve hepsine gülümseyerek bakacaksınız.
  `,
  `
    Fıkra.
    Bir sigara içen paketine baktı ve "Beni öldürüyorsun" dedi.
    Sigaralar yanıtladı: "Sen beni satın aldın."
  `,
  `
    İlginç gerçek: Su sigarayı bırakmanıza yardımcı olabilir. Neden?
    Vücudumuz büyük ölçüde sudan oluşur ve günde yaklaşık 2 litre suya ihtiyaç duyarız. Ama herkes yeterince içmiyor.
    Üstelik öğünleri atlıyor ve yeme alışkanlıklarımızı bozuyoruz.
    İşte olan şu: sigara içiyorsunuz ve toksinler vücutta "uzun süre" kalıyor,
    özellikle sigara içtikten sonra ağzınızı bile çalkalamadığınız için. Sigara tadı
    ağızda kalıyor ve zamanla tat alma duyularınız "bir tane daha içsek mi?" diyor.
    Şimdi, aralarında sadece birkaç yudum su içerseniz toksinler temizlenir
    ve sigara içme isteğiniz çok daha az olur.
  `,
  `
    Sigaralar "rahatlama" değildir. "Sigara içerek dinlenmiyorsunuz".
    Sigara olmadan da rahatlayabilirsiniz.
    İstediğiniz gibi rahatlayabilirsiniz. Şu an dinleniyorsunuz,
    ama bir nedenden dolayı aynı zamanda duman da üflüyorsunuz.
  `,
  `
    Bazen fazladan bir sigara içme dürtüsüne direnmek neredeyse imkânsız hissettiriyor.
    Gerçekten, gerçekten istiyorsunuz. Ne yapmalı? Çözüm basit.
    Bir pencereye gidin, açın ve derin bir nefes alın.
    Keyfini çıkarın. Bir yetmezse birkaç tane daha alın.
    Sigara içmek aptalca bir alışkanlık — istediğinizde içebilirsiniz.
    Ve isterseniz hiç içmemeyi de seçebilirsiniz.
  `,
  `
    Şunu hayal edin: sigarayı bırakan 60 yaş üstü insanlara dair gerçek veriler var.
    İstatistiklere göre bu yaş grubunda bile sigarayı bırakanların yaşam süresi
    eskisi gibi sigara içmeye devam edenlere kıyasla HER ZAMAN daha uzun olmuştur.
    Bu, sigaranın ne kadar zararlı olduğunu açıkça gösteriyor.
  `,
  `
    Sigara içmiyorsunuz, içmiyorsunuz, sonra aniden sinirleniyorsunuz, huzursuzlaşıyorsunuz, elleriniz titremeye başlıyor.
    Kahve yapıyorsunuz, dışarı çıkıyorsunuz, bir sigara yakıyorsunuz ve bir nefes çekiyorsunuz. Güzel, değil mi?
    Gerçekten öyle mi? Hiçbir şey yokken sinirlendiniz, dışarı çıktınız ve duman üflemeye başladınız.
    O kadar romantik gelmiyor, değil mi?
    Sigara içmeyenler bunu tam olarak böyle görüyor.
  `,
  `
    Yabancı dil öğrenmeyi denemek ister misiniz?
    Çoklu görev sigara içmeyenlerin güçlü yönüdür.
    Bu yüzden fırsatınız ve boş zamanınız varsa
    hemen şimdi başlayabilirsiniz.
  `,
  `
    Rastgele bir öksürük — sigara içenler için yaygın bir durum. Sinir bozucu, değil mi?
  `,
  `
    Sigaralar sadece tütünden yapılsaydı herkes kolayca bırakırdı.
    Tütün şirketi sahipleri bunu biliyor.
    Bu yüzden sigara içenleri çeşitli katkı maddelerine bağımlı kılıyorlar.
    Hem tütünde hem de filtrelerde her türlü şey var.
    Bu arada, sigaraların sönmemesinin nedeni de bu.
  `,
  `
    Hiç başınıza geldi mi? Akşam oturuyorsunuz, dinleniyorsunuz.
    Sonra "belki bir sigara içsem" diye düşünüyorsunuz.
    Cebinize ya da çantanıza uzanıyorsunuz ve sigaraların bittiğini görüyorsunuz.
    Ne yapıyorsunuz? Kalkıyorsunuz, giyiniyorsunuz ve en yakın büfeye sigara almaya gidiyorsunuz.
    Bunun ne kadar garip olduğunu hayal edin. Hak ettiğiniz dinlenme yerine
    giyinip çok iyi bildiğiniz bir rotada yürüyorsunuz.
  `,
  `
    Sahte sigara duymuş muydunuz? Muhtemelen evet.
    Ama sahte sigaralardan zehirlenen insanların vakaları o kadar bilinmiyor. Yine de oluyor.
    İşte nasıl gelişiyor: biri düşük kaliteli sigara içiyor, zehirleniyor, başı dönüyor, kendini kötü hissediyor.
    Ne yapıyor? Hasta olduğunu düşünüp izne çıkıyor.
    Ama zehirlenme çok daha kötü olabilir. Üstelik bunun için para da ödüyorsunuz.
  `,
  `
    Psikologlar sakız çiğnemenin sigara içme alışkanlığını güçlü biçimde pekiştirdiğine inanıyor.
    Sakız çiğneyen sigara içenler nikotini tükürükleriyle yutmaya alışıyor
    ve ağızlarına sakız girer girmez hemen sigara çağrışımı oluşuyor.
    Bu yüzden sakız çiğniyorsanız ve sigarayı bırakmayı planlıyorsanız şimdilik çiğnemeyi bırakmak daha iyi. Geçici olarak.
  `,
  `
    Fıkra. Bir adam sigarasını yaktı ve "Gerçekten sigarayı bırakmam lazım" dedi.
    Arkadaşı sordu: "Neden bırakmıyorsun?"
    Uzun bir nefes çekip yanıtladı: "Çünkü bırakmak, sigaradan daha kötü yaptığım tek şey."
  `,
  `
    Ünlülerin neredeyse hiç sigara içmediğini fark ettiniz mi?
    Ve kesinlikle karşılayamadıkları için değil.
    Sadece işe yaramaz bir alışkanlığın kölesi olmak aptalca.
  `,
  `
    Daha az sigara içmek için kendinize sınırlar koyun. Fazladan çakmakları kaldırın — sadece bir tane bırakın.
    Sigara almayı karton karton bırakın ve yanınızda sadece bir paket taşıyın.
    Sigarayı kendiniz için daha az erişilebilir kılın.
  `,
  `
    Sigarayı bırakmak kısıtlamalardan özgürlük anlamına gelir — sigara içmek için kenara çekilmek veya dışarı çıkmak zorunda kalmadan
    sosyal ortamlarda özgürce kalabilirsiniz.
  `,
  `
    Her zaman hatırlayın — sigarayı bırakmanıza yardım etmeyi vaat eden her yöntem bir dolandırıcılıktır.
    Gerçek şu ki, işe yarayan tek yöntemi zaten seçtiniz — hatırlatıcılarla sigarayı sınırlamak.
    Hiçbir hap, bant veya eğitim seansı yardımcı olmaz.
    Bunlar sadece sizden para almanın başka bir yolu.
  `,
  `
    Dürüst olmak gerekirse, sigaranın zararları hakkında okuyunca sigara içmek istiyor insan.
    O yüzden sadece bir gerçek olarak söyleyelim — sigara inanılmaz derecede zararlı, yıkıcı bir alışkanlıktır
    ve size kesinlikle hiçbir fayda sağlamaz.
  `,
  `
    Güvenli sigara yok, güvenli vap yok ve nargile içmek de sağlıklı değil.
    Bazen "en güvenli" olarak tanıtılan şey "en ölümcül" çıkabiliyor.
    Peki neden hayatınızı riske atıyorsunuz?
  `,
  `
    Modern sigara filtreleri elbette katranı tutuyor ve sigarayı biraz daha güvenli kılıyor.
    Ama "biraz daha güvenli" bir sabah uyanıp
    sigarayla ilgili ciddi bir hastalıkla karşılaşmayacağınız anlamına gelmiyor.
    O yüzden sigarayı bırakın.
  `,
  `
    Fıkra. Bir adam 20 yıl sonra sigarayı bıraktı.
    Hastaneler toplandı ve dedi ki: "En iyi müşterimizi kaybettik!"
  `,
  `
    Sigarayı anlamsız bir aktivite olarak düşünmeye başladığınızda alışkanlığın üstesinden gelmek çok daha kolay oluyor.
    Bir kişi sigarayı ne kadar çok sadece bir alışkanlık olarak düşünürse o kadar hızlı bırakır.
  `,
  `
    Enfiye tütünü ağız mukozası kanserinin yaygın bir nedenidir — evet, bu tür kanser de var.
    Pek çok insan "uyanmak için" tütün çiğniyor veya enfiye çekiyor, ama bu da tehlikeli.
  `,
  `
    Saf istatistiklere göre sigara içenlerin %90'ı yapabilseydi bırakırdı.
    Gerçek şu ki, sizin gibi inisiyatif almaları yeterli.
    Arkadaşlarınıza sigarayı bırakmak isteyip istemediklerini sorun. Hayır deseler bile,
    siz tamamen bıraktığınızda onlara örnek olacaksınız.
  `,
  `
    Her yıl çok sayıda insan sigarayı bırakıyor.
    Ama yaklaşık yarısı bunu ancak ciddi sağlık sorunları yaşadıktan sonra yapıyor.
    Oysa bu noktaya gelmek zorunda değildi.
  `,
  `
    Bu botun yardımıyla insanlar ortalama üç ayda sigarayı bırakıyor.
    Molalar arasındaki aralık iki saati geçtiyse
    artık bunu düşünmeye başlamanın zamanı gelmiştir.
    Üç veya daha fazla gün izninizin olacağı bir dönem seçin.
    Sadece ilk beş günü atlatmanız gerekiyor — sonrası kolaylaşıyor.
  `,
  `
    Filmlerde sık sık gizli sigara reklamı yapılır.
    Ana karakter derin ve tatmin edici bir nefes çektiğinde — mmm,
    gerçekten sigara içmek istiyor insan.
    Bu sigara reklamı. Her zaman bunu hatırlayın!
  `,
  `
    Fıkra. Bir sigara içen sararmış dişlerine aynada baktı ve dedi:
    "Eh, en azından artık favori kazağımla uyuşuyor."
  `,
  `
    "Sigarayı bırakamıyorum" ne demek?! Kulağa garip geliyor, değil mi?
  `,
  `
    Sık sık şunu duyarsınız: "Sigara içiyorum çünkü seviyorum.
    Sigaraların 'kokusunu' ve tütün dumanını içine çekmeyi seviyorum."
    Hatırlatalım — sigarayı bırakıyorsunuz çünkü zararlı, anlamsız
    ve başkalarını rahatsız ediyor, sizi değil.
    Evet, tütün dumanı bir şekilde hoş olabilir,
    ama onun kölesi oldunuz.
    Ve bu alışkanlığı artık kontrol edemiyorsanız, bitirme zamanı geldi.
  `,
  `
    Zor bir günün ortasında oturuyorsunuz, bir sigara yakıyorsunuz
    ve sizi hayat hakkında "sakin düşünceler" dünyasına taşıyor.
    Dinleniyorsunuz. Her şey yolunda gibi görünüyor, değil mi?
    Şimdi size söyleyeyim — bunun için sigaraya ihtiyacınız yok.
    Bu sadece içinize işlemiş bir alışkanlığın parçası
    ve şimdi bırakmak çok zor.
    Savaşın! Bu gerçek bir savaş! Daha güçlüsünüz.
  `,
  `
    Eminim ki sigaraya ilk başladığınızda "istesem içerim — istesem içmem" diyordunuz.
    Hiçbir şey değişmedi.
  `,
  `
    Tüm motivasyon mesajlarını sonuna kadar kaydırdınız.
    Şimdi baştan başlayacaklar.
    Ancak sizden bir şey istiyoruz — durmayın.
    Sigara içmenin hiçbir anlamı yok. Sigara satın alarak sadece başkasının cebini dolduruyorsunuz.
  `,
].map(v => `> 🏋️ ${B}Motivasyon${B}:\\${NL} ${v}`);

const challenges = [
  `
    Sabah kalkar kalkmaz sigara içiyorsanız yarın bunu yapmamayı deneyin.
    Önce çay veya kahve yapın. Ya da kahvaltı edin.
    Önemli olan — hemen yapmayın.
    Bu sadece bir alışkanlık ve gününüzü yönetmemeli.
  `,
  `
    Sabah kalkar kalkmaz sigara içiyorsanız yarın bunu yapmamayı deneyin.
    Önce çay veya kahve yapın. Ya da kahvaltı edin.
    Önemli olan — ilk yaptığınız şey olmasın.
    Bu sadece bir alışkanlık ve gününüzü kontrol etmemeli.
  `,
  `
    Otobüs duraklarında araç beklerken sigara içiyorsanız araç gelene kadar içmeyin.
    Arabaya binmeden önce sigara içiyorsanız bu sefer içmeyin.
    Alışkanlığınızdan daha güçlüsünüz!
  `,
  `
    Bir sonraki sigara paketini aldığınızda hemen yakmayın.
    Mümkün olduğunca ertelemeye çalışın. Ne kadar kolay olduğuna şaşıracaksınız.
    Bu sadece artık sizi kontrol etmeyen aptalca bir alışkanlık.
  `,
  `
    İşte veya okulda sigara içiyorsanız bir veya iki molayı atlayın.
    İş arkadaşlarınız davet ettiğinde reddedin. Sadece meşgul olduğunuzu ve sonra içeceğinizi söyleyin.
    Kimse size kızmaz.
    Ve alışkanlığınızdan ne kadar güçlü olduğunuzu pratik yapma fırsatı bulursunuz.
  `,
  `
    Yatmadan önce sigara içiyorsanız bu gece içmeyin.
    Bunu yapmak zorunda değilsiniz.
    Ne zaman yatmayı planladığınıza karar verin ve bir saat öncesinden sigarayı bırakın.
    Bunu planlayabilirsiniz — çok basit, inanın.
  `,
  `
    Sigarayı bırakan bir arkadaşınız varsa nasıl yaptığını sorun.
    Yoksa sigara içmeyen birine neden içmediğini sorun.
  `,
].map(v => `> 🎯 ${B}Günün Görevi${B}:\\${NL} ${v}`);

const hints = [
  `
    Günün Görevi, rekabet edebileceğiniz bir meydan okumadır.
    Günün Görevini her tamamladığınızda hedefinize bir adım daha yaklaşırsınız.
    Bu yüzden hepsini tamamlamaya çalışın.
  `,
  `
    Saat diliminizi istediğiniz zaman /time yazarak değiştirebilirsiniz.
  `,
  `
    Bot kullanıcı bilgilerini saklamaz.
    Sormayın bile.
  `,
  `
    İlerlemenizi /stats yazarak kontrol edebilirsiniz.
  `,
  `
    Bot tamamen ticari değildir. Burada reklam veya kâr arayışı söz konusu değildir.
  `,
  `
    Dili istediğiniz zaman /lang yazarak değiştirebilirsiniz.
  `,
  `
    Düşünün — belki botu arkadaşlarınızdan birine tavsiye edebilirsiniz.
    Birlikte sigarayı bırakmak çok daha eğlenceli.
  `,
  `
    İlerlemenizi sıfırlayabilir misiniz? Evet, yapabilirsiniz.
    Vakaların %99'unda işe yaramaz, ama riski göze almak istiyorsanız — /start yazın.
  `,
  `
    Botun zaten çevrildiği dillerden farklı bir yabancı dil biliyorsanız
    çeviri konusunda bize yardımcı olabilirsiniz.
    Ya da sadece bot yaratıcısını desteklemek istiyorsunuzdur.
    Öyleyse /how yazın.
  `,
].map(v => `> 💡 ${B}Faydalı İpuçları${B}:\\${NL} ${v}`);

export const motivizerTr: string[] = (() => {
  const mixHintsAndChallenges: string[] = [];
  while (challenges.length && hints.length) {
    if (hints.length) {
      const hint = hints.shift()!;
      mixHintsAndChallenges.push(hint);
    }
    if (challenges.length) {
      const challenge = challenges.shift()!;
      mixHintsAndChallenges.push(challenge);
    }
  }
  const period = Math.floor(motivations.length / mixHintsAndChallenges.length);
  const result: string[] = [];
  motivations.forEach((v, i) => {
    result.push(v);
    if (i % period == 0) {
      const hintOrChallenge = mixHintsAndChallenges.shift();
      if (hintOrChallenge) {
        result.push(hintOrChallenge);
      }
    }
  });
  return result;
})();
