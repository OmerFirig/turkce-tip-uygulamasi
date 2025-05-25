import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Homeopati() {
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

        <h1 className="mb-6 text-3xl font-bold">Homeopati</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Homeopati, "benzeri benzerle tedavi etme" prensibine dayanan alternatif bir tıp sistemidir. Bu yaklaşıma
              göre, sağlıklı bir insanda belirli semptomları oluşturabilen maddeler, aynı semptomları gösteren hasta bir
              kişiyi tedavi edebilir. Homeopatik ilaçlar, bitkisel, hayvansal veya mineral kaynaklardan elde edilen
              maddelerin yüksek oranda seyreltilmesiyle hazırlanır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Türkiye'de Homeopati</h2>
            <p>
              Türkiye'de, homeopati 2014 yılında Sağlık Bakanlığı tarafından "Geleneksel ve Tamamlayıcı Tıp" (GETAT)
              uygulamaları arasında tanındı ve sertifikalı hekimler tarafından uygulanabilmektedir.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Homeopatinin Kullanıldığı Hastalıklar</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Soğuk Algınlığı ve Üst Solunum Yolu Enfeksiyonları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Grip, nezle ve diğer üst solunum yolu enfeksiyonlarının semptomlarını hafifletmede kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Alerjiler</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Saman nezlesi, egzama gibi alerjik reaksiyonların tedavisinde yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Sindirim Sistemi Sorunları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Hazımsızlık, gaz, ishal, kabızlık gibi sindirim sistemi problemlerinde kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Baş Ağrıları ve Migren</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Çeşitli baş ağrısı türleri ve migren ataklarının yönetiminde yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Uyku Problemleri</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Uykusuzluk ve diğer uyku bozukluklarının tedavisinde kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Anksiyete ve Stres</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Hafif anksiyete, stres ve depresyon durumlarında rahatlatıcı etki gösterebilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kronik Yorgunluk</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kronik yorgunluk ve halsizlik durumlarında enerji seviyesini artırmaya yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Cilt Hastalıkları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Akne, egzama, sedef hastalığı gibi cilt problemlerinin tedavisinde kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Çocuk Hastalıkları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Diş çıkarma, gaz sancısı, huzursuzluk gibi çocukluk dönemi rahatsızlıklarında yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kadın Hastalıkları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Menstrüel düzensizlikler ve bazı kadın hastalıklarının tedavisinde kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kas-İskelet Sistemi Ağrıları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Romatizma, burkulma, incinmeler gibi kas ve iskelet sistemi ağrılarında rahatlatıcı etki gösterebilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Homeopatinin Faydaları</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Yan etkilerinin çok az veya hiç olmaması</li>
              <li>Bireye özel, kişiselleştirilmiş tedavi imkanı</li>
              <li>Kronik hastalıklarda destekleyici rol oynaması</li>
              <li>Vücudun doğal iyileşme süreçlerini harekete geçirmesi</li>
              <li>Psikolojik rahatlama ve stresin azalmasına katkı sağlaması</li>
              <li>Tamamlayıcı ve alternatif tıp alanında kullanılabilmesi</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Homeopati, yalnızca eğitimli ve sertifikalı uzmanlar tarafından uygulanmalıdır. Ciddi veya
                akut hastalıklarda konvansiyonel tıbbi tedavilerin yerini almamalıdır. Her zaman bir sağlık uzmanına
                danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Homeopatik İlaçların Hazırlanması</h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li className="text-sm">
                  <span className="font-medium">Dilüsyon:</span> Ana madde (bitkisel, hayvansal veya mineral) su veya
                  alkol içinde seyreltilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Potentizasyon:</span> Her seyreltme aşamasında karışım kuvvetlice
                  çalkalanır (sukusyon).
                </li>
                <li className="text-sm">
                  <span className="font-medium">Formülasyon:</span> Seyreltilmiş madde, şeker tabletleri, granüller veya
                  sıvı formunda hazırlanır.
                </li>
              </ol>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Homeopati, kişiye özel bir yaklaşım sunan ve vücudun kendi iyileşme mekanizmalarını harekete geçirmeyi
                amaçlayan bir tedavi sistemidir. Özellikle kronik hastalıklarda ve konvansiyonel tedavilerin yan
                etkilerinden kaçınmak isteyenler için iyi bir alternatif olabilir. Ancak, homeopatinin konvansiyonel
                tıbbi tedavilerin yerini alması değil, onları tamamlaması amaçlanmalıdır. Her zaman önce doktorunuza
                danışmanızı öneririm."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Ayşe Kaya, Homeopati Uzmanı</p>
            </div>

            <div className="rounded-lg bg-green-50 border border-green-200 p-4">
              <h3 className="font-medium text-green-800 mb-2">Sık Sorulan Sorular</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-green-700">Homeopatik ilaçlar nasıl kullanılır?</p>
                  <p className="text-sm text-green-600">
                    Genellikle dilaltı tabletler veya granüller şeklinde, yemeklerden 15-30 dakika önce veya sonra
                    alınır.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-700">Homeopatik tedavi ne kadar sürer?</p>
                  <p className="text-sm text-green-600">
                    Bu, hastalığın türüne ve kişinin durumuna bağlıdır. Akut durumlar birkaç gün içinde iyileşebilirken,
                    kronik durumlar daha uzun sürebilir.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-700">Homeopati çocuklarda güvenli midir?</p>
                  <p className="text-sm text-green-600">
                    Evet, homeopatik ilaçlar genellikle çocuklar için güvenlidir, ancak her zaman bir uzman gözetiminde
                    kullanılmalıdır.
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
