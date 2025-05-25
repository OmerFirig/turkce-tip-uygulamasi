import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SulukTedavisi() {
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

        <h1 className="mb-6 text-3xl font-bold">Sülük Tedavisi (Hirudoterapi)</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Sülük tedavisi (Hirudoterapi), tıbbi sülüklerin vücudun belirli bölgelerine uygulanarak çeşitli
              hastalıkların tedavisinde kullanıldığı geleneksel bir yöntemdir. Sülükler, kan emerken tükürüklerinde
              bulunan biyoaktif maddeler sayesinde terapötik etki gösterirler.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Sülük Tedavisinin Tarihi</h2>
            <p>
              Sülük tedavisi, insanlık tarihinin en eski tedavi yöntemlerinden biridir. Antik Mısır, Yunan, Roma ve
              Osmanlı tıbbında yaygın olarak kullanılmıştır. 18. ve 19. yüzyıllarda Avrupa'da popülerlik kazanmış, 20.
              yüzyılın başlarında modern tıbbın gelişmesiyle azalmış, ancak son yıllarda yeniden ilgi görmeye
              başlamıştır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Sülük Tedavisinin Kullanım Alanları</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Dolaşım Bozuklukları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Varis, derin ven trombozu, periferik arter hastalığı gibi dolaşım bozukluklarında kan akışını
                  iyileştirmek için kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Plastik ve Rekonstrüktif Cerrahi</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Doku nakli, replantasyon ve flep cerrahisi sonrası venöz tıkanıklığı gidermek için modern tıpta
                  kullanılmaktadır.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Romatizmal Hastalıklar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Artrit, romatizma ve osteoartrit gibi eklem hastalıklarında ağrı ve iltihabı azaltmak için
                  kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Cilt Hastalıkları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Sedef hastalığı, egzama ve akne gibi cilt hastalıklarının tedavisinde yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Migren ve Baş Ağrıları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kronik migren ve baş ağrılarının tedavisinde ağrıyı azaltmak için kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Hipertansiyon</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Yüksek tansiyon tedavisinde kan basıncını düşürmeye yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Hematom ve Morluklar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Travma sonucu oluşan hematom ve morlukların daha hızlı iyileşmesini sağlayabilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Sülük Tedavisinin Etki Mekanizması</h2>
            <p>
              Sülükler, kan emerken tükürüklerinde bulunan 100'den fazla biyoaktif madde salgılarlar. Bu maddeler
              arasında en önemlileri:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <span className="font-medium">Hirudin:</span> Güçlü bir antikoagülan (kan sulandırıcı) etkiye sahiptir.
              </li>
              <li>
                <span className="font-medium">Kalin:</span> Kan pıhtılaşmasını önler.
              </li>
              <li>
                <span className="font-medium">Hirustasin:</span> Antiinflamatuar (iltihap giderici) etki gösterir.
              </li>
              <li>
                <span className="font-medium">Bdellins:</span> Ağrı kesici ve antiinflamatuar özelliklere sahiptir.
              </li>
              <li>
                <span className="font-medium">Hiyaluronidaz:</span> Dokuların geçirgenliğini artırır.
              </li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Sülük tedavisi, yalnızca eğitimli ve sertifikalı uzmanlar tarafından steril koşullarda
                uygulanmalıdır. Bazı durumlarda (hemofili, anemi, bağışıklık sistemi hastalıkları, hamilelik vb.)
                uygulanması sakıncalı olabilir. Her zaman bir sağlık uzmanına danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Sülük Tedavisi Nasıl Uygulanır?</h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li className="text-sm">
                  <span className="font-medium">Değerlendirme:</span> Uzman, hastanın durumunu değerlendirir ve tedavi
                  planı oluşturur.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Hazırlık:</span> Tedavi edilecek bölge temizlenir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Uygulama:</span> Steril tıbbi sülükler, belirlenen bölgelere
                  yerleştirilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Emme Süreci:</span> Sülükler 20-60 dakika boyunca kan emer.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Çıkarma:</span> Sülükler kendiliğinden düşer veya uzman tarafından
                  çıkarılır.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Sonrası Bakım:</span> Kanama 1-12 saat devam edebilir, bu terapötik
                  etkinin bir parçasıdır.
                </li>
              </ol>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Sülük tedavisi, doğru uygulandığında birçok hastalıkta tamamlayıcı bir tedavi yöntemi olarak fayda
                sağlayabilir. Özellikle dolaşım bozuklukları, romatizmal hastalıklar ve plastik cerrahi sonrası
                komplikasyonlarda olumlu sonuçlar alıyoruz. Ancak her tedavi gibi, sülük tedavisi de herkes için uygun
                olmayabilir ve mutlaka eğitimli bir uzman tarafından uygulanmalıdır."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Mehmet Kaya, Hirudoterapi Uzmanı</p>
            </div>

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
              <h3 className="font-medium text-blue-800 mb-2">Sülük Tedavisinin Faydaları</h3>
              <ul className="space-y-1">
                <li className="text-sm text-blue-700">• Kan dolaşımını iyileştirir</li>
                <li className="text-sm text-blue-700">• İltihap ve ağrıyı azaltır</li>
                <li className="text-sm text-blue-700">• Kan basıncını düşürmeye yardımcı olur</li>
                <li className="text-sm text-blue-700">• Bağışıklık sistemini güçlendirir</li>
                <li className="text-sm text-blue-700">• Doku oksijenlenmesini artırır</li>
                <li className="text-sm text-blue-700">• Toksinlerin atılmasını sağlar</li>
                <li className="text-sm text-blue-700">• Yara iyileşmesini hızlandırır</li>
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
