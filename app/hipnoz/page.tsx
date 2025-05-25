import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Hipnoz() {
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

        <h1 className="mb-6 text-3xl font-bold">Hipnoz</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Hipnoz, kişinin bilinçaltına erişim sağlayan, odaklanmış dikkat ve artan telkin alabilirlik durumudur.
              Terapötik amaçlarla kullanıldığında hipnoterapi olarak adlandırılır ve çeşitli psikolojik ve fiziksel
              rahatsızlıkların tedavisinde yardımcı olabilir.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Hipnozun Tarihi</h2>
            <p>
              Hipnoza benzer uygulamaların kökeni antik Mısır'a kadar gider. M.Ö. 3000 yıllarında Mısırlılar, "uyku
              tapınakları" (sleep temples) adını verdikleri yerlerde hastaları trans benzeri bir duruma sokarak ruhsal
              ve fiziksel şifa ararlardı. Modern hipnozun temelleri ise 18. yüzyılda Franz Anton Mesmer tarafından
              atılmıştır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Günümüzde Hipnoz</h2>
            <p>
              Bugün hipnoz, birçok psikoterapi yaklaşımının bir parçası olarak kabul edilir. Özellikle şu alanlarda
              yaygın olarak kullanılır:
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Ağrı Kontrolü</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kronik ağrı, migren, doğum sancısı gibi durumlarda ağrının yönetilmesine yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Anksiyete ve Fobiler</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Çeşitli anksiyete bozuklukları ve fobilerin tedavisinde etkili olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Bağımlılıklar</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Sigara bırakma, alkol ve diğer bağımlılıkların tedavisinde yardımcı olabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Travma Sonrası Stres Bozukluğu (TSSB)</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Travmatik deneyimlerin etkilerini azaltmada ve travma sonrası stres bozukluğu tedavisinde
                  kullanılabilir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Uyku Problemleri</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  İnsomnia ve diğer uyku bozukluklarının tedavisinde yardımcı olabilir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Hipnozun Faydaları</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stres ve anksiyete azaltma</li>
              <li>Ağrı kontrolü (örneğin migren, doğum, kronik ağrılar)</li>
              <li>Fobilerin tedavisi</li>
              <li>Sigara bırakma ve bağımlılıklarla mücadele</li>
              <li>Uyku problemlerini iyileştirme</li>
              <li>Özgüveni artırma ve motivasyonu güçlendirme</li>
              <li>Travma sonrası stres bozukluğu (TSSB) tedavisi</li>
              <li>Yeme bozuklukları ve kilo kontrolü</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Hipnoz, yalnızca eğitimli ve sertifikalı uzmanlar tarafından uygulanmalıdır. Bazı
                psikiyatrik durumlarda (şizofreni, psikoz vb.) uygulanması sakıncalı olabilir. Her zaman bir sağlık
                uzmanına danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Hipnoz Süreci</h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li className="text-sm">
                  <span className="font-medium">Ön Görüşme:</span> Uzman, kişinin ihtiyaçlarını ve hedeflerini belirler.
                </li>
                <li className="text-sm">
                  <span className="font-medium">İndüksiyon:</span> Kişi rahatlatılır ve hipnotik transa girmesi
                  sağlanır.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Derinleştirme:</span> Hipnotik durum derinleştirilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Terapötik Müdahale:</span> Belirlenen hedeflere yönelik telkinler
                  verilir.
                </li>
                <li className="text-sm">
                  <span className="font-medium">Uyanma:</span> Kişi hipnotik durumdan çıkarılır.
                </li>
              </ol>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Hipnoz, bilinçaltına erişim sağlayan güçlü bir araçtır. Doğru uygulandığında, birçok psikolojik ve
                fiziksel rahatsızlığın tedavisinde etkili bir yardımcı yöntem olabilir. Ancak, hipnozun sihirli bir
                değnek olmadığını ve her durumda etkili olmayabileceğini unutmamak önemlidir. En iyi sonuçlar, hipnozun
                diğer tedavi yöntemleriyle birlikte kullanıldığı durumlarda elde edilir."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Mehmet Kaya, Klinik Hipnoz Uzmanı</p>
            </div>

            <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-4">
              <h3 className="font-medium text-indigo-800 mb-2">Sık Sorulan Sorular</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-indigo-700">Hipnoz sırasında kontrolümü kaybeder miyim?</p>
                  <p className="text-sm text-indigo-600">
                    Hayır, hipnoz sırasında kontrolünüzü kaybetmezsiniz. İstemediğiniz bir şeyi yapmaya zorlanmazsınız.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-indigo-700">Herkes hipnotize edilebilir mi?</p>
                  <p className="text-sm text-indigo-600">
                    Çoğu insan hipnotize edilebilir, ancak hipnoza yatkınlık kişiden kişiye değişebilir.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-indigo-700">Hipnoz tehlikeli midir?</p>
                  <p className="text-sm text-indigo-600">
                    Eğitimli bir uzman tarafından uygulandığında hipnoz güvenlidir ve yan etkileri minimumdur.
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
