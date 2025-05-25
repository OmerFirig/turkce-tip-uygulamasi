import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Fitoterapi() {
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

        <h1 className="mb-6 text-3xl font-bold">Fitoterapi (Bitkisel Tedavi)</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Fitoterapi, bitkilerin tedavi amaçlı kullanılması anlamına gelir. Türkiye, zengin bitki çeşitliliği ile
              fitoterapi için ideal bir coğrafyadır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Türkiye'de Yaygın Kullanılan Şifalı Bitkiler</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kekik (Thyme)</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Antiseptik ve antimikrobiyal özelliklere sahiptir. Sindirim sistemi rahatsızlıkları, öksürük ve boğaz
                  ağrısı tedavisinde kullanılır.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Ihlamur (Linden)</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Soğuk algınlığı, grip ve ateş düşürücü olarak kullanılır. Sakinleştirici etkisi de vardır.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Adaçayı (Sage)</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Boğaz ağrısı, diş eti problemleri ve sindirim sorunlarında kullanılır. Antiseptik ve antiinflamatuar
                  özelliklere sahiptir.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Papatya (Chamomile)</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Sakinleştirici etkisi vardır. Uykusuzluk, anksiyete ve sindirim sorunlarında kullanılır.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Fitoterapinin Faydaları</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Doğal içerikli olması ve yan etkilerinin genellikle daha az olması</li>
              <li>Birçok kronik hastalığın semptomlarını hafifletmesi</li>
              <li>Bağışıklık sistemini güçlendirmesi</li>
              <li>Vücudun kendi kendini iyileştirme mekanizmalarını desteklemesi</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Bitkisel tedaviler, modern tıbbi tedavilerin yerini almamalıdır. Her zaman bir sağlık
                uzmanına danışarak kullanılmalıdır.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Popüler Bitkisel Karışımlar</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  <span className="font-medium">Soğuk Algınlığı Karışımı:</span> Ihlamur, zencefil, limon
                </li>
                <li className="text-sm">
                  <span className="font-medium">Sindirim Karışımı:</span> Nane, rezene, anason
                </li>
                <li className="text-sm">
                  <span className="font-medium">Rahatlatıcı Karışım:</span> Melisa, papatya, lavanta
                </li>
                <li className="text-sm">
                  <span className="font-medium">Bağışıklık Güçlendirici:</span> Ekinezya, kuşburnu, zencefil
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Tavsiyesi</h3>
              <p className="text-sm text-muted-foreground">
                "Bitkisel tedaviler, doğru kullanıldığında sağlığımıza önemli katkılar sağlayabilir. Ancak her bitkinin
                herkese uygun olmayabileceğini unutmayın. Özellikle kronik hastalığınız varsa veya düzenli ilaç
                kullanıyorsanız, bitkisel ürünleri kullanmadan önce mutlaka doktorunuza danışın."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Ayşe Yılmaz, Fitoterapi Uzmanı</p>
            </div>

            <div className="rounded-lg bg-green-50 border border-green-200 p-4">
              <h3 className="font-medium text-green-800 mb-2">Mevsimsel Bitkiler</h3>
              <p className="text-sm text-green-700">Şu anda mevsiminde olan ve taze toplanabilen bitkiler:</p>
              <ul className="mt-2 space-y-1">
                <li className="text-sm text-green-700">• Kekik (Mayıs-Eylül)</li>
                <li className="text-sm text-green-700">• Nane (Haziran-Ağustos)</li>
                <li className="text-sm text-green-700">• Adaçayı (Mayıs-Temmuz)</li>
                <li className="text-sm text-green-700">• Kuşburnu (Eylül-Kasım)</li>
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
