import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Kayropraktik() {
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

        <h1 className="mb-6 text-3xl font-bold">Kayropraktik</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Kayropraktik, el uygulamaları anlamına gelmektedir. Manuel tedavilerin en bilimsel ve akademik olanıdır.
              Kayropraktik, sinir sistemini düzenlemek amacıyla omurga, kemik ve kaslara müdahale etme yöntemidir. Genel
              hedef omurgada var olduğu düşünülen oynamaları ortadan kaldırmaktır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Kayropraktik Tedavinin Kullanım Alanları</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Baş Ağrıları ve Migren</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Migren ve gerilim tipi baş ağrıları gibi durumlar, kayropraktik tedavinin hedef aldığı alanlardır.
                  Kayropraktörler, baş ve boyun bölgesindeki eklemleri manipüle ederek baş ağrılarını hafifletmeye
                  çalışırlar.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Bel ve Boyun Ağrıları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Omurga problemlerinden kaynaklanan bel ve boyun ağrıları, kayropraktik tedavinin en yaygın kullanım
                  alanlarıdır.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Duruş Bozuklukları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kötü duruş alışkanlıklarından kaynaklanan problemlerin düzeltilmesinde etkili olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Spor Yaralanmaları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Spor aktiviteleri sırasında oluşan kas ve eklem yaralanmalarının tedavisinde yardımcı olabilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Kayropraktik Tedavi Nasıl Uygulanır?</h2>
            <p>
              Kayropraktik tedavi, omurga ve eklemlere uygulanan özel manipülasyon teknikleriyle gerçekleştirilir.
              Kayropraktör, elleriyle kontrollü ve hızlı bir şekilde eklemlere baskı uygulayarak, kısıtlanmış eklem
              hareketlerini serbest bırakmayı ve sinir sıkışmalarını gidermeyi amaçlar.
            </p>
            <p className="mt-2">
              Tedavi sırasında genellikle bir "çıt" sesi duyulabilir. Bu ses, eklem içindeki gaz kabarcıklarının
              patlamasından kaynaklanır ve zararlı değildir.
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Kayropraktik tedavi, yalnızca eğitimli ve sertifikalı uzmanlar tarafından uygulanmalıdır.
                Bazı durumlarda (osteoporoz, omurga tümörleri, ileri derecede disk hernisi vb.) uygulanması sakıncalı
                olabilir. Her zaman bir sağlık uzmanına danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Kayropraktik Seans Süreci</h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li className="text-sm">
                  <span className="font-medium">Değerlendirme:</span> Uzman, sağlık durumunuzu ve şikayetlerinizi
                  değerlendirir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Fiziksel Muayene:</span> Omurga ve eklemlerin durumu incelenir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Tedavi Planı:</span> Kişiye özel bir tedavi planı oluşturulur.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Manipülasyon:</span> Omurga ve eklemlere özel tekniklerle müdahale
                  edilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Takip:</span> Düzenli kontroller ile iyileşme süreci takip edilir.
                </li>
              </ol>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Kayropraktik tedavi, kas-iskelet sistemi rahatsızlıklarında etkili bir tamamlayıcı tedavi yöntemidir.
                Özellikle bel ve boyun ağrılarında, ilaç kullanımını azaltmaya ve hastaların yaşam kalitesini artırmaya
                yardımcı olabilir. Ancak her tedavi gibi, kayropraktik de herkes için uygun olmayabilir ve mutlaka
                eğitimli bir uzman tarafından uygulanmalıdır."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Mehmet Yılmaz, Kayropraktik Uzmanı</p>
            </div>

            <div className="rounded-lg bg-green-50 border border-green-200 p-4">
              <h3 className="font-medium text-green-800 mb-2">Kayropraktik Tedavinin Faydaları</h3>
              <ul className="space-y-1">
                <li className="text-sm text-green-700">• Ağrıyı doğal yollarla azaltır</li>
                <li className="text-sm text-green-700">• İlaç kullanımını azaltabilir</li>
                <li className="text-sm text-green-700">• Hareket kabiliyetini artırır</li>
                <li className="text-sm text-green-700">• Duruş problemlerini düzeltmeye yardımcı olur</li>
                <li className="text-sm text-green-700">• Sinir sıkışmalarını giderebilir</li>
                <li className="text-sm text-green-700">• Genel yaşam kalitesini artırabilir</li>
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
