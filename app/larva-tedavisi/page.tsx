import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LarvaTedavisi() {
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

        <h1 className="mb-6 text-3xl font-bold">Larva Tedavisi</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Larva tedavisi (Maggot Terapi), steril olarak üretilmiş sinek larvalarının (kurtçuklar) kronik ve enfekte
              yaraların tedavisinde kullanıldığı biyolojik bir tedavi yöntemidir. Larvalar, yaradaki ölü dokuyu
              (nekrotik doku) seçici olarak temizler, enfeksiyonu azaltır ve yara iyileşmesini hızlandırır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Larva Tedavisinin Tarihçesi</h2>
            <p>
              Larva tedavisi, diyabetik ayak yaraları, bası yaraları, kronik ülserler gibi zor iyileşen yaraların
              tedavisinde etkin ve güvenilir bir yöntem olarak kabul edilmektedir. Dünya Sağlık Örgütü (WHO) ve birçok
              sağlık otoritesi tarafından onaylanmıştır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Larva Tedavisinin Kullanıldığı Hastalıklar</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Diyabetik Ayak Yaraları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Diyabet hastalarında oluşan ve zor iyileşen ayak yaralarının tedavisinde etkili olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Bası Yaraları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Yatak yarası olarak da bilinen dekübit ülserlerinin tedavisinde kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Venöz Ülserler</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Varise bağlı bacak yaralarının tedavisinde etkili olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Arteriyel Ülserler</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Arteriyel dolaşım bozukluğuna bağlı oluşan yaraların tedavisinde kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Travmatik Yara Enfeksiyonları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Travma sonucu oluşan ve enfekte olmuş yaraların tedavisinde yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Yanık Sonrası Yara Enfeksiyonları</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Yanık sonrası oluşan ve enfekte olmuş yaraların tedavisinde kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Ameliyat Sonrası Enfekte Yaralar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Cerrahi operasyon sonrası enfekte olmuş yaraların tedavisinde etkili olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Nekrotik Yaralar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Ölü doku içeren yaraların temizlenmesi ve iyileştirilmesinde kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Osteomiyelit İlişkili Yaralar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kemik enfeksiyonu (osteomiyelit) ile ilişkili açık yaraların tedavisinde yardımcı olabilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Larva Tedavisinin Faydaları</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ölü dokuları seçici olarak temizler (debridman)</li>
              <li>Enfeksiyon kontrolü sağlar, antibakteriyel etki gösterir</li>
              <li>Yara iyileşmesini hızlandırır</li>
              <li>Doğal ve güvenli bir yöntemdir</li>
              <li>Kronik ve zor iyileşen yaralarda etkilidir</li>
              <li>Amputasyon riskini azaltabilir</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Larva tedavisi, yalnızca eğitimli ve sertifikalı sağlık profesyonelleri tarafından steril
                koşullarda uygulanmalıdır. Bazı durumlarda (açık vücut boşluklarına yakın yaralar, kanama bozuklukları
                vb.) uygulanması sakıncalı olabilir. Her zaman bir sağlık uzmanına danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Larva Tedavisi Nasıl Uygulanır?</h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li className="text-sm">
                  <span className="font-medium">Hazırlık:</span> Yara değerlendirilir ve temizlenir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Larvaların Yerleştirilmesi:</span> Steril larvalar doğrudan yaraya veya
                  özel bir pansuman içinde uygulanır.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Pansuman:</span> Larvalar yarada kalacak şekilde özel bir pansuman
                  yapılır.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Tedavi Süresi:</span> Larvalar genellikle 2-4 gün boyunca yarada
                  bırakılır.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Larvaların Çıkarılması:</span> Tedavi sonunda larvalar çıkarılır ve yara
                  temizlenir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Tekrar Uygulama:</span> Gerekirse tedavi birkaç kez tekrarlanabilir.
                </li>
              </ol>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Larva tedavisi, özellikle antibiyotiklere dirençli enfeksiyonların olduğu kronik yaralarda çok etkili
                bir yöntemdir. Larvalar, cerrahi debridmandan daha seçici olarak ölü dokuyu temizler ve sağlıklı dokuya
                zarar vermez. Ayrıca, larvaların salgıladığı enzimler ve antimikrobiyal maddeler, yaradaki bakterileri
                öldürür ve iyileşmeyi hızlandırır. Diyabetik ayak yaralarında ve bası yaralarında özellikle başarılı
                sonuçlar alıyoruz."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Ayşe Demir, Yara Bakım Uzmanı</p>
            </div>

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
              <h3 className="font-medium text-blue-800 mb-2">Sık Sorulan Sorular</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-blue-700">Larva tedavisi ağrılı mıdır?</p>
                  <p className="text-sm text-blue-600">
                    Bazı hastalar hafif bir karıncalanma hissedebilir, ancak genellikle ağrılı değildir. Gerekirse ağrı
                    kesiciler kullanılabilir.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-700">Tedavi ne kadar sürer?</p>
                  <p className="text-sm text-blue-600">
                    Her uygulama 2-4 gün sürer. Yaranın durumuna göre birkaç uygulama gerekebilir.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-700">Larvalar yarayı enfekte eder mi?</p>
                  <p className="text-sm text-blue-600">
                    Hayır, tedavide kullanılan larvalar laboratuvar ortamında steril olarak üretilir ve enfeksiyon riski
                    taşımaz.
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
