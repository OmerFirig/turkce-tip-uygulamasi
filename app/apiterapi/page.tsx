import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Apiterapi() {
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

        <h1 className="mb-6 text-3xl font-bold">Apiterapi</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Apiterapi, arı ürünlerinin (bal, propolis, arı sütü, polen, arı zehiri) sağlık ve tedavi amaçlı
              kullanımını içeren bir alternatif tıp yöntemidir. Binlerce yıldır farklı kültürlerde kullanılan bu yöntem,
              günümüzde bilimsel araştırmalarla desteklenmektedir.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Türkiye'de Apiterapi</h2>
            <p>
              2014 yılında Türkiye'de Geleneksel ve Tamamlayıcı Tıp Uygulamaları Yönetmeliği kapsamında apiterapi resmi
              olarak tanındı. Sağlık Bakanlığı onaylı "Apiterapi Uygulama Merkezleri" açılmaya başlandı.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Apiterapinin Faydaları</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Bağışıklık Sistemini Güçlendirir</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Arı ürünleri, içerdikleri antioksidanlar ve biyoaktif bileşikler sayesinde bağışıklık sistemini
                  destekler.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Antienflamatuar ve Ağrı Kesici Etki</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Özellikle arı zehiri, romatizmal hastalıklarda ve kronik ağrılarda antienflamatuar etki gösterebilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Antibakteriyel ve Antiviral Özellik</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Bal ve propolis, güçlü antibakteriyel ve antiviral özelliklere sahiptir, enfeksiyonlarla mücadelede
                  yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Zihinsel Performansı Artırır</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Arı sütü ve polen, beyin fonksiyonlarını destekleyerek zihinsel performansı artırabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Hücre Yenilenmesini Destekler</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Arı ürünleri, hücre yenilenmesini destekleyerek cilt sağlığını iyileştirebilir ve yaşlanma karşıtı
                  etki gösterebilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Apiterapinin Kullanım Alanları</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Romatizmal hastalıklar</li>
              <li>Enfeksiyonlar ve bağışıklık problemleri</li>
              <li>Sinir sistemi ve zihinsel yorgunluk</li>
              <li>Cilt problemleri</li>
              <li>Kronik ağrılar</li>
              <li>Sindirim sistemi sorunları</li>
              <li>Ağız ve diş sağlığı problemleri</li>
              <li>Enerji eksikliği ve beslenme desteği</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Apiterapi, yalnızca eğitimli ve sertifikalı uzmanlar tarafından uygulanmalıdır. Özellikle
                arı zehiri uygulamaları, arı alerjisi olan kişilerde ciddi alerjik reaksiyonlara neden olabilir. Her
                zaman bir sağlık uzmanına danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Apiterapi Ürünleri</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  <span className="font-medium">Bal:</span> Antibakteriyel, antioksidan ve yara iyileştirici özelliklere
                  sahiptir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Propolis:</span> Güçlü antibakteriyel, antiviral ve antienflamatuar
                  etkileri vardır.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Arı Sütü:</span> Vitamin, mineral ve aminoasitler açısından zengindir,
                  bağışıklık sistemini güçlendirir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Polen:</span> Protein, vitamin ve mineraller açısından zengindir, enerji
                  verir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Arı Zehiri:</span> Antienflamatuar özelliklere sahiptir, romatizmal
                  hastalıklarda kullanılır.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Apiterapi, doğru uygulandığında birçok hastalıkta tamamlayıcı bir tedavi yöntemi olarak fayda
                sağlayabilir. Özellikle bağışıklık sistemini güçlendirmesi ve antienflamatuar etkileri nedeniyle kronik
                hastalıklarda destekleyici olabilir. Ancak her tedavi gibi, apiterapi de herkes için uygun olmayabilir
                ve mutlaka eğitimli bir uzman tarafından uygulanmalıdır."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Ayşe Yılmaz, Apiterapi Uzmanı</p>
            </div>

            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
              <h3 className="font-medium text-amber-800 mb-2">Dikkat Edilmesi Gerekenler</h3>
              <ul className="space-y-1">
                <li className="text-sm text-amber-700">• Arı alerjisi olanlar apiterapiden kaçınmalıdır</li>
                <li className="text-sm text-amber-700">• Hamilelik ve emzirme döneminde uzman onayı alınmalıdır</li>
                <li className="text-sm text-amber-700">• Kan sulandırıcı ilaç kullananlar dikkatli olmalıdır</li>
                <li className="text-sm text-amber-700">• Diyabet hastaları bal tüketiminde dikkatli olmalıdır</li>
                <li className="text-sm text-amber-700">• Kalp ve tansiyon hastaları uzman gözetiminde kullanmalıdır</li>
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
