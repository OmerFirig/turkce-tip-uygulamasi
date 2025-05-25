import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Hacamat() {
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

        <h1 className="mb-6 text-3xl font-bold">Hacamat</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Hacamat, vücuttaki kirli kanın vakumla çekilerek alınması işlemidir. Türk-İslam tıbbında önemli bir yere
              sahip olan bu yöntem, günümüzde de yaygın olarak uygulanmaktadır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Hacamat Nedir?</h2>
            <p>
              Hacamat, özel aletler kullanılarak derinin yüzeysel olarak çizilmesi ve ardından vakum uygulanarak kirli
              kanın alınması işlemidir. Geleneksel tıpta "kötü kanın" vücuttan atılması amacıyla yapılır.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Hacamat Çeşitleri</h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Kuru Hacamat</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Deri kesilmeden sadece vakum uygulanır. Kan alınmaz, sadece bölgesel kan dolaşımını artırmak
                  amaçlanır.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Yaş Hacamat</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Deri yüzeysel olarak çizilir ve vakum uygulanarak kan alınır. Geleneksel hacamat yöntemidir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Hacamatın Faydaları</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kan dolaşımını düzenlemesi</li>
              <li>Bağışıklık sistemini güçlendirmesi</li>
              <li>Ağrıları hafifletmesi</li>
              <li>Vücuttaki toksinlerin atılmasına yardımcı olması</li>
              <li>Migren ve baş ağrılarına iyi gelmesi</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <p className="text-sm font-medium text-yellow-800">
                Önemli Not: Hacamat, sadece eğitimli ve sertifikalı uzmanlar tarafından, steril koşullarda yapılmalıdır.
                Kan sulandırıcı ilaç kullananlar, kanama bozukluğu olanlar ve bazı kronik hastalıkları olanlar için
                uygun olmayabilir.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Hacamat Noktaları</h3>
              <p className="text-sm text-muted-foreground">Geleneksel tıpta hacamat için önerilen bazı noktalar:</p>
              <ul className="mt-2 space-y-2">
                <li className="text-sm">
                  <span className="font-medium">Kahil:</span> Boyun arkasındaki çukur bölge
                </li>
                <li className="text-sm">
                  <span className="font-medium">Akhayn:</span> İki omuz arası
                </li>
                <li className="text-sm">
                  <span className="font-medium">Hamame:</span> Başın tepe noktası
                </li>
                <li className="text-sm">
                  <span className="font-medium">Erk:</span> Baldır bölgesi
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Uzman Görüşü</h3>
              <p className="text-sm text-muted-foreground">
                "Hacamat, doğru uygulandığında birçok rahatsızlığa iyi gelebilir. Ancak her tedavi gibi, hacamat da
                herkes için uygun olmayabilir. Özellikle kan değerlerinizde anormallik varsa veya kronik bir
                hastalığınız varsa, hacamat yaptırmadan önce mutlaka doktorunuza danışın."
              </p>
              <p className="text-sm font-medium mt-2">- Dr. Mehmet Yıldız, Geleneksel ve Tamamlayıcı Tıp Uzmanı</p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-4">
              <h3 className="font-medium text-red-800 mb-2">Hacamat Yapılmaması Gereken Durumlar</h3>
              <ul className="space-y-1">
                <li className="text-sm text-red-700">• Kan sulandırıcı ilaç kullananlar</li>
                <li className="text-sm text-red-700">• Hemofili hastaları</li>
                <li className="text-sm text-red-700">• Ağır anemi (kansızlık) durumları</li>
                <li className="text-sm text-red-700">• Hamilelik</li>
                <li className="text-sm text-red-700">• Ateşli hastalık durumları</li>
                <li className="text-sm text-red-700">• Kanser tedavisi görenler</li>
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
