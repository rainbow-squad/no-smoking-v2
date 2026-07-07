import { Content } from "../../constants";
import { MultilineContent } from "../types";
import { NL, N2, ND, B, I } from "./constants";

const donate_link = process.env.DONATE_LINK;
const tg_group_link = process.env.TG_GROUP_LINK;

export const dialogsTr: MultilineContent = {
  [Content.MESSAGE]: "Mesajınız alındı",
  [Content.ERROR]: "🍄 Bir şeyler ters gitti. {{error}}",
  [Content.USER_UNKNOWN]: `
    🤖 ${B}Bu işlev yalnızca yetkili kullanıcılar için kullanılabilir${B}${ND}
    Lütfen aşağıdaki düğmeye basarak giriş yapın.
  `,
  [Content.START_NEW]: `
    Merhaba! 🙂${N2}
    Tütün şirketleri sağlığınızdan mı kazanıyor?${NL}
    Sigarayı bırakmanın bir yolunu mu arıyorsunuz?${N2}
    ${B}Akıllıca bir karar!${B}${N2}
    Birlikte başarabiliriz 🤙${ND}
    Supported languages${NL}
    Click here ➤ /lang ${NL}
    🇷🇺 🇬🇧 🇪🇸 🇩🇪 🇮🇹 🇹🇷
  `,
  [Content.START_EXISTING]: `
    Merhaba! ✌️${N2}
    Uygulamamızda zaten bir miktar ilerleme kaydettiğinizi görüyoruz.${NL}
    Hesabınız yeniden etkinleştirildi!${N2}
    Üç seçeneğiniz var:${N2}
    1. ${B}Hesabı tamamen sıfırla.${B}${NL}
    Bu sizi Aşama 1'e geri götürür.${NL}
    Molalar arası süre: SIFIRLANDI.${N2}
    2. ${B}İlerlemeyi temizle.${B}${NL}
    Aşama 2'den başlarsınız, ancak başlangıç süresi sıfırlanır.${NL}
    Molalar arası aralık: ${I}{{min_delta}}${I}.${N2}
    3. ${B}Olduğu gibi bırak.${B}${NL}
    Tam olarak kaldığınız yerden devam edersiniz.${NL}
    ${B}Önerilmez${B}.${NL}
    Molalar arası süre: ${I}{{delta_time}}${I}.
  `,
  [Content.START_EXISTING_STAGE_1]: `
    Merhaba! ✌️${N2}
    Hesabınız yeniden etkinleştirildi,${NL}
    tüm veriler güncellendi.${N2}
    Aşama 1'i tekrar tamamlamanız gerekiyor ⤵️
  `,
  [Content.START_VALID_USER]: `
    👁 Etkinleştirme girişimi${N2}
    Hesabı tekrar etkinleştirme girişimi tespit edildi.${NL}
    Bu genellikle teknik bir hata nedeniyle olur.${ND}
    Güvenlik amacıyla mevcut durumunuz:${N2}
    ⏱️ Molalar arası süre: ${B}{{delta_time}}${B}.${NL}
    ⏰ Sonraki mola: ${B}{{time_to_get_smoke}}${B}
  `,
  [Content.START_RESET_IGNORE]: `
    ${B}"Her şeyi olduğu gibi bırak"${B} seçeneğini seçtiniz.${NL}
    Bu tamamen sizin kararınız.${NL}
    /start yazarak istediğiniz zaman tüm ilerlemenizi sıfırlayabilirsiniz.${NL}
    ⚔️ ${B}Aşama 2${B} etkinleştirildi ⚔️${N2}
    Molalar arası başlangıç aralığı${NL}
    ${B}{{delta_time}}${B} olarak ayarlandı.${N2}
    Bir sonraki molanızın zamanı, ${B}"Sigara içiyorum"${B} düğmesine bir sonraki basışınızda hesaplanacak.
  `,
  [Content.START_RESET_TO_STAGE_1]: `
    İlerlemeniz ${B}tamamen sıfırlandı${B}.${N2}
    En iyi karar bu 👑${ND}
    Aşama 1'i tekrar tamamlamanız gerekiyor ⤵️
  `,
  [Content.START_RESET_TO_STAGE_2]: `
    ${B}"Aşama 2'ye sıfırla"${B} seçeneğini seçtiniz.${NL}
    Mevcut aşama ilerlemesi sıfırlandı.${ND}
    ⚔️ ${B}Aşama 2${B} etkinleştirildi ⚔️${N2}
    Molalar arası başlangıç aralığı${NL}
    ${B}{{delta_time}}${B} olarak ayarlandı.${N2}
    Bir sonraki molanızın zamanı, ${B}"Sigara içiyorum"${B} düğmesine bir sonraki basışınızda hesaplanacak.
  `,
  [Content.LANG]: "Please choose a language to use:",
  [Content.LANG_APPLIED]: "🇹🇷 Türkçe dil ayarlandı.",
  [Content.STAGE_1]: `
    ${B}Aşama 1${B}${N2}
    Öncelikle ne sıklıkla sigara içtiğinizi anlamamız gerekiyor.${NL}
    Bu süre ilerleyen hesaplamalar için başlangıç noktamız olacak.${N2}
    Bunun için molalarınız arasındaki aralığı 20 kez ölçeceğiz. Bu sadece bir paket sigara.${N2}
    Çok uzun veya çok kısa aralıklar sayılmayacak,${NL}
    bu yüzden uyursanız veya düğmeye basmayı unutursanız endişelenmeyin.${N2}
    ${B}Hadi başlayalım!${B}${ND}
    Bir sonraki sigara içmek istediğinizde ${B}"Sigara içiyorum"${B} düğmesine basın.
  `,
  [Content.FIRST_STEP]: `
    Süreniz kaydedildi!${N2}
    Tebrikler! İlk adımı attınız! 👍${N2}
    Önemli olan devam etmek ve her sigara içtiğinizde düğmeye basmayı unutmamak.${ND}
    ✅️ {{stage_1_left}} kez kaldı
  `,
  [Content.STAGE_1_FORGOT_TO_CLICK]: `
    Basmayı unuttunuz mu? Sorun değil! 🙃${N2}
    Botu kullanmaya yeni başlarken bu sık olur.${N2}
    ${B}Önemli olan${B} alışkanlık edinmek ve ${B}başladığınızı bitirmek${B}.
  `,
  [Content.STAGE_1_IGNORE_MIN]: `
    Düğmeye çok sık basıyorsunuz.${N2}
    Sizin hatanız değilse — anlıyoruz —${NL}
    mesajları okuduktan sonra ${I}botu HEMEN kapatmaya${I} alışın.${N2}
    Sayılacak minimum aralık {{min_stage_1}}.${ND}
    💢 {{stage_1_left}} kez kaldı
  `,
  [Content.STAGE_1_IGNORE_MAX]: `
    Kaydedilebilecek minimum aralık {{max_stage_1}} dakikadır.${N2}
    Sigara içme sürelerini doğru hesaplamak için bu kadar uzun aralıkları saymıyoruz.${N2}
    Bir dahaki sefere ${B}"Sigara içiyorum"${B} düğmesine basmayı unutmayın.${ND}
    💫 {{stage_1_left}} kez kaldı
  `,
  [Content.STAGE_1_PROCESSING]: `
    Süreniz kaydedildi!${ND}
    ✅️ {{stage_1_left}} kez kaldı
  `,
  [Content.STAGE_1_YOU_CAN_RESET]: `
    💡 Bu aşama için sigara içme anlarını kaçırmamak çok önemlidir,${NL}
    çünkü başlangıç aralığınız bunlara göre hesaplanacak.${N2}
    Eğer kaybolduysanız /start yazarak yeniden başlamak daha iyidir.
  `,
  [Content.STAGE_1_END]: `
    ${B}Aşama 1 tamamlandı! 🎉${B}${N2}
    Tebrikler!${N2}
    Kararlılığınız sayesinde başlayabileceğimiz ortalama süreyi hesaplayabildik.${N2}
    Bu süre ${B}{{delta_time}}${B}.${ND}
    Aşama 2'ye geçiyoruz ⤵️
  `,
  [Content.NEXT_SMOKING_TIME]: `
    Sonraki mola {{time_to_get_smoke}} sonrasında ⏰️
  `,
  [Content.STAGE_2_INITIAL]: `
    ${B}Her şey hazır!${B}${N2}
    🕒 Molalar arası mevcut aralığınız: ${B}{{delta_time}}${B}${N2}
    Artık bir sigara programına uymaya çalışacağız.${NL}
    Her gün seçilen zorluk seviyesine göre birkaç dakika kaydıracağız.${N2}
    Programa uyamazsanız sorun değil.${NL}
    Sadece ${B}"Sigara içiyorum"${B} düğmesine basmayı unutmayın.${NL}
    Bunu dikkate alacağız ama ilerlemenizi durdurmayacak.${N2}
    Başlayalım!
  `,
  [Content.STAGE_2_HINT]: `
    ⚠️ ${B}Hatırlamak önemli!${B}${N2}
    Sigara içme isteği ${I}en fazla 5 dakika${I} sürer❗️${NL}
    Dolayısıyla aniden sigara içmek isteyip henüz zamanı gelmediyse —${NL}
    kendinizi bir şeyle meşgul edin, 5 dakika içinde${NL}
    sigara içmek istediğinizi unutacaksınız.${NL}
    Tam olarak böyle çalışıyor!
  `,
  [Content.STAGE_2]: `
    Süre kaydedildi ✅️
  `,
  [Content.STAGE_2_SUCCESS]: `
    Süre kaydedildi. Başardınız! 👍
  `,
  [Content.STAGE_2_IGNORE_MIN]: `
    Düğmeye çok sık basıyorsunuz ⏳${NL}
    Sayılan minimum aralık ${B}{{min_interval}}${B}.${N2}
    ${I}Modern telefonlarda bu kullanıcının hatası olmadan gerçekleşebilir.${NL}
    Bunun çok sinir bozucu olduğunu biliyoruz.${NL}
    Bunu önlemek için — saati gördüğünüzde sohbeti kapatın.${I}
  `,
  [Content.STAGE_2_PROPS_MISSING]: `
    💢 Hata: Ayarlar bulunamadı.${N2}
    Bu komuta erişmek için profilinizin tamamen yapılandırılmış olması gerekiyor.${ND}
    Bunun bir hata olduğunu düşünüyorsanız [grubumuzdan](${tg_group_link}) geliştiriciye yazın.
  `,
  [Content.PENALTY]: `
    Uygulamada motive edici bir ceza sistemi bulunmaktadır.${N2}
    Programa uymazsanız zorluğu hafifçe azaltırız.${N2}
    Ceza bir sonraki uzun moladan sonra uygulanacak.${ND}
    🚭 Mevcut ceza puanı: ${B}{{penalty}}${B}
  `,
  [Content.PENALTY_3]: `
    🤯 Çoğu insan sigara programına kolayca uyar.${NL}
    Ancak ceza puanlarınızın biriktiğini fark ettik.${NL}
    Dengelenmeniz gerekiyor.${N2}
    Bunun için ${B}antrenman modu${B} tasarlandı!${N2}
    ${I}Bu moda geçmenizi ve dengelenmenizi${I} şiddetle tavsiye ederiz.
  `,
  [Content.IDLE_NO_CIGARETTES]: `
    🌀 ${B}Yeni gün yeniden başlatıldı${B}${N2}
    Bir nedenden dolayı geçen sefer molalarınızı kaydetmediniz.${NL}
    Ancak sigarayı bırakma hedefinizden vazgeçmemiş olmanız kararlılığınızı gösteriyor.${N2}
    ${B}Lütfen devam edin!${B} 🚀
  `,
  [Content.TIME_FOR_A_SMOKE]: "🔥 Mola zamanı! 🔥",
  [Content.ON_IDLE_START]: `💤💤💤 ${B}Uzun Aralık${B}${N2}`,
  [Content.ON_IDLE_TIME_CONFIRMATION]: `⏰️ Saatleri senkronize edelim. Sizde saat ${B}{{local_time}}${B} mi?`,
  [Content.ON_IDLE_STATS_1]: `Dün ${B}{{cigarettes}}${B} sigara içtiniz${NL}`,
  [Content.ON_IDLE_STATS_2]: `
    Molalar arası aralığınız yeniden hesaplandı:${NL}
    Önceki aralık: {{prev_delta}}${NL}
    \\- Ceza puanları: {{penalty}} \\[{{penalty_mins}}\\]${NL}
    \\+ Adım {{step}}${NL}
    \\= Güncellenen aralık ${I}{{new_delta}}${I}
  `,
  [Content.WINSTRIKE]: `
    ⚡️ {{winstrike}} süredir dayanıyorsunuz! Harika!
  `,
  [Content.WINSTRIKE_BASE]: `
    📚 Antrenman modundan çıkmak için cezasız birkaç gün tamamlayın. {{day}} / {{of_days}}
  `,
  [Content.WINSTRIKE_MEDIUM]: `
    ⚔️ Hızlı moda geçmek için ${I}arka arkaya${I} birkaç cezasız gün tamamlayın!${N2}
    📆 Mevcut ilerleme: ${B}{{day}} / {{of_days}}${B}
  `,
  [Content.WINSTRIKE_BASE_FAILED]: `
    ⭐️ ${B}Antrenman${B} zorluk seviyesindesiniz.${N2}
    ✨${I}Ceza puanları sayılmıyor.${I}✨${N2}
    Yine de cezasız ilerlemeye çalışın 😉
  `,
  [Content.WINSTRIKE_BASE_SUCCESS]: `
    🥁 Alıştığınızı ve zorluğu değiştirmeye hazır olduğunuzu görüyoruz!
  `,
  [Content.DIFFICULTY]: `
    📈 ${B}Zorluk seviyenizi seçin${B}${N2}
    - ${B}{{ difficulty_easy }}${B}:${NL}
     Günde +0,5 dakika${NL}
    Aralık sistemine alışmanıza yardımcı olur.${N2}
    - ${B}{{ difficulty_medium }}${B}:${NL}
    Günde +2 dakika. ${I}En uygun${I} seçenek.${NL}
    Orta bir tempo istiyorsanız bu sizin için.${N2}
    - ${B}{{ difficulty_hard }}${B}:${NL}
    Günde +5 dakika${NL}
    Yalnızca sigarayı bırakmak için ${I}ciddi şekilde çalışmaya hazırsanız${I}.${NL}
    1 hata ve Normal seviyeye düşersiniz.${N2}
    Mevcut zorluk seviyeniz 🏂 ${B}{{difficulty}}${B}.
  `,
  [Content.DIFFICULTY_EASY]: "Antrenman",
  [Content.DIFFICULTY_MEDIUM]: "Normal",
  [Content.DIFFICULTY_HARD]: "Hızlı",
  [Content.DIFFICULTY_SELECTED]: `
    ${B}"{{difficulty}}"${B} zorluk seviyesini seçtiniz.
  `,
  [Content.DIFFICULTY_DESCRIPTION]: `
    📌 Lütfen bu mesajı okuyun${N2}
    Size ANTRENMAN zorluk seviyesi atandı.${ND}
    ${B}Neden "Antrenman" seviyesiyle başlamak önemli?${B}${N2}
    Bu aşamada ${B}temel hedef — alışılmış sigara içme kalıplarını kırmaktır${B}.
    Örneğin kahveyle, otobüs durağında beklerken,
    iş arkadaşlarıyla molada sigara içmek gibi durumlar.${N2}
    Bu en zor kısım. İstatistiklerimiz şunu gösteriyor:${NL}
    - ${B}İlk 3 günde${B} kullanıcıların %95'i programa uymuyor.${NL}
    - ${B}İlk 5 günde${B} kullanıcıların %100'ü bunu yapıyor.${N2}
    ${I}Antrenman modu tam olarak bu sorunu çözmek için tasarlandı.${I}${ND}
    📃 ${B}Nasıl çalışır?${B}${N2}
    ${B}1. Programa uymasan bile "Sigara içiyorum" düğmesine bas.${B}${NL}
    Bu, alışkanlıklarının farkına varmanı ve nerede daha çok zorlandığını analiz etmeni sağlar.${N2}
    ${B}2. Bu aşamada ceza uygulanmaz.${B}${NL}
    Bunun yerine ihlallerini görecek ve bunları kontrol etmeyi yavaş yavaş öğreneceksin.${N2}
    ${B}3. Sisteme alış.${B}${NL}
    Her geçen gün daha disiplinli olduğunu ve programa daha iyi uyduğunu fark edeceksin.${ND}
    ${B}Sırada ne var?${B}${N2}
    İhlallerin azaldığını veya tamamen ortadan kalktığını hissettiğinde,
    ${B}daha gelişmiş bir zorluk seviyesine geçebilirsin${B}.
    Cezalar uygulanacak ama artık seni rahatsız etmeyecek çünkü hazır olacaksın.${ND}
    ⬆️ ⬆️ ⬆️ ⬆️ ⬆️${NL}
    Hesabınızın kurulumu${NL}
    🔜 ${B}1 dakika içinde otomatik olarak tamamlanacak${B}.${NL}
    Bu duraklama yukarıdaki mesajı okumanız için gereklidir.
  `,
  [Content.DIFFICULTY_HARD_DECREASED]: `
    Programın dışına çıktınız!${N2}
    Zorluk seviyeniz${NL}
    ${B}Normal'e düşürüldü${B} 🔻${N2}
    🚭 Ceza puanı uygulanmadı.
  `,
  [Content.DIFFICULTY_HARD_AUTO]: `
    ✨ Zorluk seviyesi ${B}Hızlı${B} olarak değiştirildi 🚀 ✨
  `,
  [Content.TIMEZONE]: `
    🌐 ${B}Saat dilimi ayarı${B}${N2}
    Saat diliminizi ayarlamak için şunları yapın:${N2}
    1. ${B}Google${B}'a gidin ve "timezone" yazın.${NL}
    2. Arama çubuğunun hemen altında saat diliminizi parantez içinde göreceksiniz.${NL}
    3. Parantezler olmadan kopyalayın ve ${B}bize gönderin${B}.${ND}
    [Google'a gitmek için tıklayın](https://www.google.com/search?q=my+timezone)
  `,
  [Content.TIMEZONE_INTRO]: `
    Saati doğru görüntülemek için saat diliminizi belirlememiz gerekiyor.
  `,
  [Content.TIMEZONE_SELECTED]: `
    🕰️ Seçilen saat dilimi: ${B}{{timezone}}${B}${N2}
    ${B}Bu önemli${B}❗${NL}
    Lütfen mevcut saatinizi kontrol edin.${NL}
    Sistemimiz sizde şu an saat ${B}{{local_time}}${B} olduğunu tespit ediyor.${N2}
    Birkaç dakika fark önemli değil,${NL}
    ancak saat yarım saat veya daha fazla kaymışsa${NL}
    saat diliminizi güncellemeniz gerekecek.${ND}
    Mevcut saatiniz ${B}{{local_time}}${B} mi?
  `,
  [Content.TIMEZONE_INVALID]: `
    💢 ${B}Hata: Geçersiz saat dilimi${B}${N2}
    Doğru saat dilimi örneği: GMT+3${NL}
    Lütfen tekrar deneyin.
  `,
  [Content.LOCAL_TIME_NEW]: `
    🌐 ${B}Saat dilimi yapılandırması${B}${N2}
    Lütfen telefon veya bilgisayarınızdaki saate bakın
    ve saati 24 saat formatında girin.${N2}
    Örnekler:${NL}
    {{time_sample}}, 0:21, 19:00, 01:14
  `,
  [Content.LOCAL_TIME]: `
    👉 Mevcut saatiniz ${B}{{local_time}}${B} olmalı ⏳${N2}
    Lütfen düğmeleri kullanarak onaylayın veya düzeltin.
  `,
  [Content.SETTINGS]: `
    ${B}Aşama 2. Yapılandırma.${B}${NL}
    Saat dilimi ve zorluk seviyesi gibi ayarları yapılandırma zamanı.
  `,
  [Content.SETTINGS_DONE]: `
    ${B}Hesap kurulumu tamamlandı!${B} 🎉${NL}
    Botu kullanmaya başlayın ⤵️
  `,
  [Content.SETTINGS_UPDATED]: `
    ${B}Ayarlarınız güncellendi${B} ✔️${N2}
    🕒 Molalar arası mevcut aralığınız: ${B}{{delta_time}}${B}
  `,
  [Content.SETTINGS_UPDATED_ON_IDLE]: `
    ✅ Tamam!${N2}
    Her sigara içtiğinizde sadece «Sigara içiyorum» düğmesine basın.
  `,
  [Content.BOT_IGNORE]: `
    🕵️ ${B}Sizi kaybettik!${B}${N2}
    Botla son etkileşiminizden bu yana ${I}2 gün${I} geçti.${N2}
    ${B}Devam etmeyi planlıyor musunuz?${B}${ND}
    ❌ Botu kullanmaya ${B}devam etmeyi planlamıyorsanız${B} — bir neden seçin:${N2}
    - ${I}Sigarayı bıraktınız mı?${I} — O zaman tebrikler! 🎊${N2}
    - ${I}Bırakmaktan vazgeçtiniz${I} — Üzücü ama bu sizin kararınız.${ND}
    ✅ ${B}Devam etmeyi planlıyorsanız${B} birkaç seçenek var:${N2}
    1. ${B}{{from_scratch_message}}${B} — mevcut aralığınız yaklaşık iki saat veya daha azsa.${NL}
    İlerlemenizi sıfırlar ve ${I}sıfırdan başlarsınız${I}.${N2}
    2. ${B}{{no_penalty_message}}${B} — kaldığınız yerden devam ederiz (ara çok uzamamışsa bazen işe yarar).${NL}
    Zamanlayıcınız ${B}{{ no_penalty_time }}${B} olarak ayarlanacak.${N2}
    3. ${B}{{set_own_interval}}${B} — sıfırdan geri almak istemeyen deneyimli kullanıcılar için.${NL}
    Uygun gördüğünüz aralığı ${B}3:17${B} formatında ayarlayın (yazın)
  `,
  [Content.BOT_IGNORE_JUST_GO_ON]: `
    ${B}Devam edelim!${B} Harika! 👍${ND}
    Hayatın gerçekten hızlı ve yoğun olduğunu anlıyoruz.${N2}
    Tam da bu yüzden sigarayı bırakma hedefinden vazgeçmemelisiniz.${NL}
    Sadece başladığınızı bitirmeniz gerekiyor.
  `,
  [Content.BOT_IGNORE_SET_OWN_INTERVAL]: `
    "${B}Kendi aralığımı ayarla${B}" seçeneğini seçtiniz.${N2}
    Bu deneyimli kullanıcılar için en iyi seçenektir.${N2}
    Lütfen ihtiyacınız olan aralığı 24 saat formatında girin.${ND}
    Örnekler:${NL}
    2:30, 3:15, 5:55
  `,
  [Content.BOT_IGNORE_FAILED]: `
    ${B}Sigarayı bırakmamaya${B} karar verdiniz 🤯${ND}
    Umarız daha sonra fikrinizi değiştirirsiniz.${N2}
    Bot artık size mesaj göndermeyecek.${N2}
    Botu yeniden etkinleştirmek için /start yazın.
  `,
  [Content.BOT_IGNORE_SUCCESS]: `
    🎈 ${B}Sigarayı bıraktınız${B}! 🎉${ND}
    Demek ki buna değdi 👍${N2}
    Sizinle birkaç öneri paylaşmak istiyoruz:${N2}
    - İlk hafta en zor olanıdır, bunu unutmayın${NL}
    - Su için — yardımcı olur${NL}
    - Yeni bir teknik öğrenin: bir şey sizi strese soktuğunda derin bir nefes alın.
    Bu, sigara içme dürtüsüne harika bir alternatiftir.${N2}
    Sigara bir tuzaktır.${NL} Sadece paranızı almanın bir yoludur.${N2}
    ${B}Başarınızla inanılmaz derecede gurur duyuyoruz!${B}${ND}
    Bu bot tamamen ticari değildir. Bundan kazanç sağlamayı planlamıyorum.
    Ancak teşekkür olarak bir kahve ısmarlarsanız çok memnun olurum.
    Bunun için aşağıdaki bağlantıyı ziyaret edin ve "Donate €3" düğmesine tıklayın.${NL}
    Bağlantı: [${donate_link}](${donate_link})${NL}
    Teşekkürler! 👍${ND}
    Umarım buna ihtiyacınız olmaz,${NL}
    ama yeniden sigara içmeye başlarsanız /start yazın.
  `,
  [Content.CUSTOM_INTERVAL_SUCCESS]: `
    Seçtiğiniz aralık başarıyla ayarlandı.${N2}
    Uyum sağlamanıza yardımcı olmak için zorluk seviyesi NORMAL'e düşürüldü.${N2}
    Botu eskisi gibi kullanmaya devam edin.
  `,
  [Content.CUSTOM_INTERVAL_ERROR]: `
    Aralık ayarlanamadı. Lütfen farklı bir formatta girmeyi deneyin.
  `,
  [Content.STATS]: `
    📋 ${B}İstatistikleriniz${B}:${NL}
    - Mevcut zorluk seviyeniz 🏂 ${B}{{difficulty}}${B}${NL}
    - Botu kullanmaya {{start_date}} tarihinde başladınız${NL}
    - O günden bu yana geçen gün sayısı: {{days_from_start}}${NL}
    - Toplam içilen sigara: {{cigarettes}}${NL}
    - Uygulanan toplam ceza puanı: {{penalty_all}}${NL}
    - Başlangıç aralığı {{delta_min}}${NL}
    - Mevcut aralık {{delta_time}}${NL}
  `,
  [Content.HOW]: `
    ${B}Bot yaratıcısını nasıl destekleyebilirsiniz:${B}${N2}
    ${B}Gönüllü bağış yoluyla mali destek sağlayabilirsiniz.${B}${NL}
    Botun tamamen ticari olmadığını anlamanız önemlidir.${NL}
    Bu, ne kadar bağış yaparsanız yapın botun işlevselliğini değiştirmeyeceğim veya reklam eklemeyeceğim anlamına gelir.${NL}
    Varsayılan bağış miktarı 3 Euro'dur, ancak isterseniz daha fazla verebilirsiniz.${NL}
    Bağlantı: [${donate_link}](${donate_link})${N2}
    ${B}Diğer dillere çeviri konusunda yardımcı olabilirsiniz.${B}${NL}
    İlgileniyorsanız {{admin_email}} adresine e-posta gönderin, bir hafta içinde yanıtlamaya çalışırım.${N2}
    ${B}Botu arkadaşlarınıza anlatarak yardımcı olabilirsiniz.${B}${NL}
    Elbette popülerlik bu projenin amacı değil.${NL}
    Ama kabul edin, kimse bilmiyorsa hepsi anlamsız.${N2}
    ${I}Nasıl yardım ederseniz edin, teşekkürler!${I}${NL}
    ${I}Projemin geleceğini önemsemeniz benim için çok değerli${I} 💓
  `,
  [Content.MAXIMUM_REACHED]: `
    ${B}⚜️ Maksimuma ulaştınız! ⚜️${B}${N2}
    İnanılmaz ama gerçek — tüm olası sınırları aştınız!${N2}
    ${I}Ne yazık ki uygulamamız bu kadar büyük aralıkları desteklemiyor, bu nedenle aralık artık değişmeyecek.${I}${ND}
    ${B}Henüz sigarayı bırakmadıysanız:${B}${N2}
    Sigarayı geride bırakmanın zamanı geldi. Aralığınız zaten çok büyük ve devam etmenin anlamı yok.${N2}
    Sigarayı tamamen bırakmanıza yardımcı olacak önerilerimize göz atın. Aşağıdaki düğmeye tıklamanız yeterli 💙${ND}
    Her halükarda başarılar diliyoruz! 💪
  `,
  [Content.JOIN_OUR_CHAT]: `
    ${B}Kullanıcılarımız için sıcak bir sohbet ortamı oluşturduk${B}${N2}
    Yeni insanlarla tanışabileceğiniz,${NL}
    fikir paylaşabileceğiniz ve ilham alabileceğiniz bir yer 💫${N2}
    Bize katılın 👉 [bağlantı](${tg_group_link})
  `,
  // dev
  [Content.DEV]: `⚒️ ${B}Development Mode is ON${B} ⚒️`,
  [Content.DEV_OFF]: "Dev Mode is Off ⛔️",
  [Content.DEV_USER_DELETED]: "🔮 User Deleted /start",
  [Content.DEV_TO_STAGE_1]: "🔮 Your user was reset to Stage 1",
  [Content.DEV_FILL_STAGE_1]: "🔮 Stage 1 was filled, {{stepsAdded}} steps added",
  [Content.DEV_LAST_TIME_MINUS_HOUR]: "🔮 Last time set to 1 hour ago",
  [Content.DEV_STAGE_1_MORE_THAN_MAX]: "🔮 Last time set to more than max value",
  [Content.DEV_TO_IDLE]: "🔮 User switched to Idle mode",
  [Content.DEV_NEXT]: `
    🔮 Next smoke break will happen in 1 minute${N2}
    Waiting for timer... 🧭
  `,
  [Content.DEV_MOTIVIZER]: "🔮 Motivizer Updated",
  [Content.DEV_IGNORE]: `
    🔮 The application lost the user${N2}
    Waiting for timer... 🧭
  `,
  [Content.DEV_LANG]: "🕉️ Select language:",
};
