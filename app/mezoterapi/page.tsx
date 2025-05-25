import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Mezoterapi() {
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

        <h1 className="mb-6 text-3xl font-bold">Mezoterapi</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Mezoterapi, çeşitli vitamin, mineral, aminoasit, enzim, hormon ve ilaçların karışımlarının çok ince
              iğnelerle derinin orta tabakasına (mezoderm) enjekte edildiği bir tedavi yöntemidir. Bu yöntem, hem tıbbi
              hem de estetik amaçlarla kullanılabilir.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Mezoterapinin Tarihçesi</h2>
            <p>
              Mezoterapi, 1952 yılında Fransız doktor Michel Pistor tarafından geliştirilmiştir. Pistor, mezoterapiyi
              ilk olarak ağrı tedavisinde kullanmıştır. Hastaların ağrılarını azaltmak için küçük dozlarda ilaçları deri
              altına enjekte etmiştir. 1970'lerden itibaren mezoterapi, estetik tıpta cilt gençleştirme, selülit
              tedavisi, bölgesel incelme gibi amaçlarla da uygulanmaya başlanmıştır. Günümüzde mezoterapi, dünya
              genelinde yaygın bir tamamlayıcı tedavi yöntemi olarak kabul edilir. Hem tıbbi hem kozmetik alanlarda
              kullanımı artmıştır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Mezoterapinin Kullanıldığı Hastalıklar</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Selülit ve Bölgesel Yağlanma</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Mezoterapi, selülit görünümünü azaltmak ve bölgesel yağlanmayı gidermek için yaygın olarak kullanılır.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Cilt Yaşlanması ve Kırışıklıklar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Cilt gençleştirme ve kırışıklıkların azaltılması için vitamin ve hyaluronik asit içeren karışımlar
                  kullanılır.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Saç Dökülmesi</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Androgenetik alopesi (erkek/kadın tipi saç dökülmesi) tedavisinde saç köklerini güçlendirmek için
                  kullanılır.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Yara İzleri ve Cilt Lekeleri</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Akne izleri, ameliyat izleri ve cilt lekelerinin görünümünü azaltmak için uygulanabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kas ve Eklem Ağrıları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Romatizmal ağrılar, boyun-bel ağrıları gibi kas-iskelet sistemi problemlerinde ağrı giderici olarak
                  kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Sportif Yaralanmalar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kas spazmları ve sportif yaralanmaların tedavisinde iyileşmeyi hızlandırmak için uygulanabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Akne ve Akne İzleri</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Aktif akne tedavisi ve akne izlerinin görünümünü azaltmak için kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Cilt Elastikiyeti Kaybı</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Ciltteki elastikiyet kaybı ve sarkmalar için sıkılaştırıcı etkisi nedeniyle tercih edilebilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Dolaşım Problemleri</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Varis ve ödem gibi dolaşım problemlerinin tedavisinde yardımcı olabilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Mezoterapinin Faydaları</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cilt gençleştirme: Kırışıklıkların azalması, cildin elastikiyetinin artması</li>
              <li>Selülit tedavisi: Bölgesel yağlanmanın ve portakal kabuğu görünümünün azaltılması</li>
              <li>Bölgesel zayıflama: İncelme ve vücut şekillendirme</li>
              <li>Saç dökülmesi tedavisi: Saç köklerinin güçlendirilmesi ve saç dökülmesinin yavaşlatılması</li>
              <li>Ağrı yönetimi: Kas ve eklem ağrılarında ağrının hafifletilmesi</li>
              <li>Cilt lekeleri ve ton farklılıklarının düzeltilmesi</li>
              <li>Cilt nemlendirme ve canlandırma</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Mezoterapi, yalnızca eğitimli ve sertifikalı uzmanlar tarafından steril koşullarda
                uygulanmalıdır. Bazı durumlarda (hamilelik, emzirme, kanama bozuklukları, bağışıklık sistemi
                hastalıkları vb.) uygulanması sakıncalı olabilir. Her zaman bir sağlık uzmanına danışarak
                kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Mezoterapi Süreci</h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li className="text-sm">
                  <span className="font-medium">Konsültasyon:</span> Uzman, kişinin ihtiyaçlarını ve hedeflerini
                  belirler.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Hazırlık:</span> Tedavi edilecek bölge temizlenir ve gerekirse lokal
                  anestezi uygulanır.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Enjeksiyon:</span> Özel karışımlar çok ince iğnelerle derinin orta
                  tabakasına enjekte edilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Sonrası Bakım:</span> Tedavi sonrası bakım talimatları verilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Tekrar Seanslar:</span> Genellikle 1-2 hafta arayla 4-10 seans
                  uygulanır.
                </li>
              </ol>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Mezoterapi, doğru uygulandığında hem estetik hem de tıbbi amaçlarla etkili bir tedavi yöntemidir.
                Özellikle cilt gençleştirme, selülit tedavisi ve saç dökülmesi gibi alanlarda olumlu sonuçlar
                alabiliyoruz. Ancak, her tedavi gibi mezoterapinin de herkes için uygun olmayabileceğini ve mutlaka
                eğitimli bir uzman tarafından uygulanması gerektiğini unutmamak önemlidir."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Mehmet Yılmaz, Mezoterapi Uzmanı</p>
            </div>

            <div className="rounded-lg bg-pink-50 border border-pink-200 p-4">
              <h3 className="font-medium text-pink-800 mb-2">Dikkat Edilmesi Gerekenler</h3>
              <ul className="space-y-1">
                <li className="text-sm text-pink-700">• Hamilelik ve emzirme döneminde uygulanmamalıdır</li>
                <li className="text-sm text-pink-700">• Kanama bozukluğu olanlar dikkatli olmalıdır</li>
                <li className="text-sm text-pink-700">• Bağışıklık sistemi hastalıkları olanlarda kontrendikedir</li>
                <li className="text-sm text-pink-700">• Tedavi bölgesinde aktif enfeksiyon varsa uygulanmamalıdır</li>
                <li className="text-sm text-pink-700">• Kan sulandırıcı ilaç kullananlar doktorlarına danışmalıdır</li>
                <li className="text-sm text-pink-700">• İşlem sonrası 24 saat güneşten korunmalıdır</li>
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
