import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Refleksoloji() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-xl font-bold">Alternatif Tıp Türkiye</h1>
          <nav className="ml-auto flex gap-4">
            <Link href="/" className="text-sm font-medium">
              Ana Sayfa
            </Link>
            <Link href="/hakkimizda" className="text-sm font-medium text-muted-foreground">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="text-sm font-medium text-muted-foreground">
              İletişim
            </Link>
          </nav>
        </div>
      </header>
      <main className="container px-4 py-8">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri Dön
          </Link>
        </Button>

        <h1 className="mb-6 text-3xl font-bold">Refleksoloji</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Refleksoloji, insan vücudundaki organların, el ve ayaklarda sonlanan sinir uçlarına bası uygulanarak,
              çeşitli rahatsızlıklara yönelik destek tedavi sağlanan tamamlayıcı tıp metodudur. Refleksoloji ile,
              belirli baskı noktalarına çeşitli masajlar yaparak organlardaki bozukluklar iyileştirilmeye çalışılır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Refleksolojinin Tarihi</h2>
            <p>
              Refleksoloji'nin tarihi 5000 yıl öncesine, Mısır Firavunlarına kadar uzanmaktadır. Tarihte
              Refleksoloji'nin Hindistan'da, Japonya'da, Çin'de ve Amerika'nın yerli Kızılderili medeniyetlerinde
              bilindiği kaydedilir. Refleksoloji'yi çok sonra, 1900'lü yıllarda, Dr. William Fitzgerald yeniden
              keşfetmiştir.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Refleksolojinin Faydaları</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Stres ve Rahatlama</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Refleksoloji, stres ve gerginliği azaltarak derin bir rahatlama sağlar. Endorfin salınımını artırarak
                  doğal bir rahatlama hissi oluşturur.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Ağrı Yönetimi</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Çeşitli ağrıların yönetiminde yardımcı olabilir. Özellikle baş ağrısı, sırt ağrısı ve kronik ağrılarda
                  rahatlatıcı etki gösterebilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Uyku Kalitesi</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Uyku kalitesini artırarak daha dinlendirici bir uyku sağlayabilir. Uykusuzluk problemi yaşayanlar için
                  faydalı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Göz Yorgunluğu</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Uzun süre ekran karşısında çalışanlarda oluşan göz yorgunluğunu hafifletebilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Sindirim Sistemi</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Sindirim sistemini düzenleyerek hazımsızlık, kabızlık gibi sorunların giderilmesine yardımcı olabilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Refleksoloji Nasıl Uygulanır?</h2>
            <p>
              Refleksoloji, genellikle ayaklara, bazen de ellere uygulanan özel bir masaj tekniğidir. Uygulama
              sırasında, vücuttaki belirli organları ve sistemleri temsil eden refleks noktalarına baskı uygulanır. Bu
              baskı, parmaklar, başparmak ve avuç içi kullanılarak yapılır.
            </p>
            <p className="mt-2">
              Bir refleksoloji seansı genellikle 30-60 dakika sürer ve kişi tamamen giyinik olarak, sadece ayakları
              açıkta kalacak şekilde rahat bir pozisyonda uzanır veya oturur.
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Refleksoloji, yalnızca eğitimli ve sertifikalı uzmanlar tarafından uygulanmalıdır. Bazı
                durumlarda (hamilelik, derin ven trombozu, ayak yaraları vb.) uygulanması sakıncalı olabilir. Her zaman
                bir sağlık uzmanına danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Refleksoloji Haritası</h3>
              <p className="text-sm text-muted-foreground">
                Ayaklarda ve ellerde bulunan refleks noktaları, vücuttaki belirli organ ve sistemleri temsil eder:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="text-sm">
                  <span className="font-medium">Baş parmak:</span> Baş ve beyin
                </li>
                <li className="text-sm">
                  <span className="font-medium">Ayak tabanının ortası:</span> Mide ve pankreas
                </li>
                <li className="text-sm">
                  <span className="font-medium">Topuk:</span> Pelvis ve alt sırt
                </li>
                <li className="text-sm">
                  <span className="font-medium">Ayak iç kısmı:</span> Omurga
                </li>
                <li className="text-sm">
                  <span className="font-medium">Ayak dış kısmı:</span> Kalça, diz, dirsek
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Refleksoloji, stres yönetimi ve genel rahatlama için etkili bir tamamlayıcı tedavi yöntemidir.
                Özellikle modern yaşamın getirdiği stres ve gerginlikle başa çıkmada yardımcı olabilir. Ancak,
                refleksolojinin tıbbi tedavilerin yerini alması değil, onları desteklemesi amaçlanmalıdır. Her zaman
                önce doktorunuza danışmanızı öneririm."
              </p>
              <p className="text-sm font-medium mt-2">- Ayşe Yılmaz, Refleksoloji Uzmanı</p>
            </div>

            <div className="rounded-lg bg-purple-50 border border-purple-200 p-4">
              <h3 className="font-medium text-purple-800 mb-2">Sık Sorulan Sorular</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-purple-700">Refleksoloji ağrılı mıdır?</p>
                  <p className="text-sm text-purple-600">
                    Genellikle ağrılı değildir, ancak bazı hassas noktalarda hafif bir rahatsızlık hissedilebilir.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-700">Kaç seans gereklidir?</p>
                  <p className="text-sm text-purple-600">
                    Bu, kişinin durumuna ve hedeflerine bağlıdır. Genellikle 4-6 seans önerilir.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-700">Refleksoloji sonrası ne hissedilir?</p>
                  <p className="text-sm text-purple-600">
                    Çoğu kişi rahatlama, enerji artışı ve genel bir iyilik hali hisseder. Bazen geçici yorgunluk
                    olabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-sm text-muted-foreground">&copy; 2025 Alternatif Tıp Türkiye. Tüm hakları saklıdır.</p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari">Kullanım Şartları</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
