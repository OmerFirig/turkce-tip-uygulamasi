import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Akupunktur() {
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

        <h1 className="mb-6 text-3xl font-bold">Akupunktur</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Akupunktur, vücudun belirli noktalarına ince iğneler batırarak enerji akışını düzenlemeyi ve sağlığı
              iyileştirmeyi amaçlayan kadim bir tedavi yöntemidir. Geleneksel Çin Tıbbı'na dayanan bu yöntem, vücuttaki
              "qi" enerjisini dengeleyerek ağrıyı hafifletir, hastalıkları tedavi eder ve genel sağlığı iyileştirir.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Akupunkturun Tarihi</h2>
            <p>
              Akupunktur Çin'de 3000 yıldan uzun süredir uygulanıyor ve 16. yüzyıldan 19. yüzyıla kadar Avrupa ve
              Amerika'ya yayıldı. Akupunktur araştırmalarının tarihi 18. yüzyılda başladı ve o zamandan beri hızla
              gelişti.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Akupunkturun Kullanım Alanları</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Ağrı Yönetimi</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Baş ağrıları, migren, bel ağrısı, boyun ağrısı ve fibromiyalji (romatizmal ağrı sendromu) gibi çeşitli
                  ağrı durumlarında etkili olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kireçlenme ve Eklem Sorunları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Osteoartrit ve diğer eklem rahatsızlıklarında ağrıyı azaltmaya ve hareket kabiliyetini artırmaya
                  yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Solunum Bozuklukları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Alerjik rinit gibi solunum bozukluklarının semptomlarını hafifletebilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kemoterapiye Bağlı Yan Etkiler</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kemoterapiye bağlı bulantı ve kusma gibi yan etkileri azaltmada yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Diş Ağrısı</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Diş ağrılarının hafifletilmesinde tamamlayıcı bir tedavi olarak kullanılabilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Akupunktur Nasıl Çalışır?</h2>
            <p>
              Akupunktur, vücuttaki belirli "meridyen" adı verilen enerji kanalları boyunca yerleşmiş noktalara ince
              iğneler yerleştirerek çalışır. Geleneksel Çin Tıbbı'na göre, hastalıklar vücuttaki "qi" (yaşam enerjisi)
              akışındaki dengesizliklerden kaynaklanır. Akupunktur, bu enerji akışını dengeleyerek sağlığı iyileştirmeyi
              amaçlar.
            </p>
            <p className="mt-2">
              Modern tıp açısından bakıldığında, akupunktur iğnelerinin yerleştirilmesi sinir sistemini uyarır, endorfin
              gibi doğal ağrı kesicilerin salınımını artırır ve inflamasyonu azaltabilir.
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Akupunktur, yalnızca eğitimli ve sertifikalı uzmanlar tarafından steril koşullarda
                uygulanmalıdır. Bazı durumlarda (kanama bozuklukları, hamilelik, kalp pili kullanımı vb.) uygulanması
                sakıncalı olabilir. Her zaman bir sağlık uzmanına danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Akupunktur Seansı Nasıl Geçer?</h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li className="text-sm">
                  <span className="font-medium">Değerlendirme:</span> Uzman, sağlık durumunuzu ve şikayetlerinizi
                  değerlendirir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">İğnelerin Yerleştirilmesi:</span> İnce, steril iğneler vücudun belirli
                  noktalarına yerleştirilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">İğnelerin Bırakılması:</span> İğneler genellikle 15-30 dakika boyunca
                  yerinde bırakılır.
                </li>
                <li className="text-sm">
                  <span className="font-medium">İğnelerin Çıkarılması:</span> Seans sonunda iğneler çıkarılır.
                </li>
              </ol>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Akupunktur, modern tıpla birlikte kullanıldığında birçok rahatsızlığın tedavisinde tamamlayıcı bir rol
                oynayabilir. Özellikle kronik ağrı yönetiminde, ilaç kullanımını azaltmaya yardımcı olabilir ve
                hastaların yaşam kalitesini artırabilir. Ancak her tedavi gibi, akupunktur da herkes için uygun
                olmayabilir ve mutlaka eğitimli bir uzman tarafından uygulanmalıdır."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Ayşe Demir, Akupunktur Uzmanı</p>
            </div>

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
              <h3 className="font-medium text-blue-800 mb-2">Sık Sorulan Sorular</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-blue-700">Akupunktur ağrılı mıdır?</p>
                  <p className="text-sm text-blue-600">
                    Akupunktur iğneleri çok incedir ve genellikle hafif bir batma hissi dışında ağrı vermez.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-700">Kaç seans gereklidir?</p>
                  <p className="text-sm text-blue-600">
                    Bu, tedavi edilen duruma ve kişisel yanıta bağlıdır. Genellikle 6-12 seans önerilir.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-700">Yan etkileri var mıdır?</p>
                  <p className="text-sm text-blue-600">
                    Doğru uygulandığında yan etkileri minimumdur. Hafif morarma, kanama veya baş dönmesi görülebilir.
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
