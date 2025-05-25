import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function OzonTedavisi() {
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

        <h1 className="mb-6 text-3xl font-bold">Ozon Tedavisi</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Ozon tedavisi, tıbbi amaçlarla ozon gazının kullanıldığı alternatif bir tedavi yöntemidir. Ozon, üç
              oksijen atomundan oluşan (O₃) bir gazdır ve güçlü oksitleyici özelliklere sahiptir.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Ozon Tedavisinin Tarihi</h2>
            <p>
              Diş hekimi ve cerrah olan Fisch 1950'de ozonla ilgili geniş bir doktora tez çalışması hazırladı. Joachim
              Hansler ve Hans Wolff 1950'lerde beraber çalışarak ozonun tıpta kullanımını geliştirdi. Ozonosan adını
              verdikleri jeneratör ile modern ozon tedavisinin ilk temellerini atmış oldular.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Ozon Tedavisinin Kullanım Alanları</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kanser</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Ozon tedavisi, kanser tedavisinde destekleyici bir yöntem olarak kullanılabilir. Bağışıklık sistemini
                  güçlendirerek ve hücrelerin oksijenlenmesini artırarak etki gösterebilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Bel Fıtığı</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Ozon gazı enjeksiyonu, bel fıtığı tedavisinde ağrıyı azaltmak ve inflamasyonu gidermek için
                  kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Diyabet</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Diyabetik yaraların iyileşmesini hızlandırmak ve diyabetin komplikasyonlarını azaltmak için
                  kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Diş Hastalıkları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Periodontit ve diğer diş hastalıklarında antimikrobiyal etki göstererek tedaviye yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Anti-aging</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Hücre yenilenmesini destekleyerek ve oksidatif stresi azaltarak yaşlanma karşıtı etki gösterebilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kronik Yaralar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Zor iyileşen yaraların tedavisinde, antimikrobiyal etkisi ve doku oksijenlenmesini artırması nedeniyle
                  kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kronik Yorgunluk</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Hücresel enerji üretimini artırarak kronik yorgunluk semptomlarını hafifletebilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">İskemik Hastalıklar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kan dolaşımını iyileştirerek ve doku oksijenlenmesini artırarak iskemik hastalıklarda fayda
                  sağlayabilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Ozon Tedavisi Nasıl Uygulanır?</h2>
            <p>Ozon tedavisinin uygulanması ikiye ayrılır:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <span className="font-medium">Sistemik Ozon Tedavisi:</span> Ozon gazının damar içine enjekte edilerek
                veya ozon ile zenginleştirilmiş kanın hastaya tekrar verilmesiyle gerçekleştirilir.
              </li>
              <li>
                <span className="font-medium">Lokal Ozon Tedavisi:</span> Ozon gazının belirli bir bölgeye veya organa
                uygulanmasıyla yapılır. Örneğin, cilt yüzeyine veya enfekte olmuş bir yaraya ozon gazı uygulanabilir.
              </li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Ozon tedavisi, yalnızca eğitimli ve sertifikalı uzmanlar tarafından uygulanmalıdır. Bazı
                durumlarda (hamilelik, hipertiroidizm, G6PD eksikliği vb.) uygulanması sakıncalı olabilir. Her zaman bir
                sağlık uzmanına danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Ozon Tedavisi Yöntemleri</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  <span className="font-medium">Majör Otohemoterapi:</span> Hastadan alınan kan ozonlanarak tekrar
                  hastaya verilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Minör Otohemoterapi:</span> Az miktarda kan alınıp ozonlanarak kas içine
                  enjekte edilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Rektal İnsüflasyon:</span> Ozon gazı rektal yoldan verilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Ozonlanmış Yağlar:</span> Ozon gazı ile zenginleştirilmiş yağlar cilde
                  uygulanır.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Ozon Sauna:</span> Vücut ozon gazı ile temas ettirilir.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Ozon tedavisi, doğru uygulandığında birçok hastalıkta tamamlayıcı bir tedavi yöntemi olarak fayda
                sağlayabilir. Özellikle antimikrobiyal etkisi ve doku oksijenlenmesini artırması nedeniyle kronik
                yaralarda ve enfeksiyonlarda etkili olabilir. Ancak her tedavi gibi, ozon tedavisi de herkes için uygun
                olmayabilir ve mutlaka eğitimli bir uzman tarafından uygulanmalıdır."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Ahmet Kaya, Ozon Tedavisi Uzmanı</p>
            </div>

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
              <h3 className="font-medium text-blue-800 mb-2">Ozon Tedavisinin Faydaları</h3>
              <ul className="space-y-1">
                <li className="text-sm text-blue-700">• Antimikrobiyal etki (bakteri, virüs, mantar)</li>
                <li className="text-sm text-blue-700">• Bağışıklık sistemini güçlendirme</li>
                <li className="text-sm text-blue-700">• Doku oksijenlenmesini artırma</li>
                <li className="text-sm text-blue-700">• Antiinflamatuar etki</li>
                <li className="text-sm text-blue-700">• Kan dolaşımını iyileştirme</li>
                <li className="text-sm text-blue-700">• Hücresel enerji üretimini artırma</li>
                <li className="text-sm text-blue-700">• Detoksifikasyon</li>
              </ul>
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
