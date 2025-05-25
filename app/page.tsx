import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Leaf, Droplets, Flame, Wind } from "lucide-react"

export default function Home() {
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
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Türkiye'nin Geleneksel ve Alternatif Tıp Yöntemleri</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Türkiye'nin zengin kültürel mirasından gelen geleneksel şifa yöntemlerini ve modern alternatif tıp
            uygulamalarını keşfedin.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <CardTitle>Fitoterapi</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Bitkisel tedavi yöntemleri ve Anadolu'nun şifalı bitkileri hakkında bilgi edinin.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/fitoterapi">Daha Fazla Bilgi</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Droplets className="h-5 w-5 text-blue-600" />
              <CardTitle>Sülük Tedavisi</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Geleneksel Türk tıbbında önemli yeri olan sülük tedavisi ve faydaları.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/suluk-tedavisi">Daha Fazla Bilgi</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Flame className="h-5 w-5 text-red-600" />
              <CardTitle>Hacamat</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Yüzyıllardır uygulanan hacamat tedavisi ve modern tıptaki yeri hakkında bilgiler.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/hacamat">Daha Fazla Bilgi</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Wind className="h-5 w-5 text-purple-600" />
              <CardTitle>Akupunktur</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Türkiye'de akupunktur uygulamaları ve sağlık üzerindeki etkileri.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/akupunktur">Daha Fazla Bilgi</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-center">Diğer Alternatif Tıp Yöntemleri</h2>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path>
                  <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path>
                  <path d="M16 22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4z"></path>
                </svg>
                <CardTitle>Kayropraktik</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Omurga ve eklem manipülasyonları ile sinir sistemini düzenleyen manuel tedavi yöntemi.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/kayropraktik">Daha Fazla Bilgi</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-600"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="M8 18v-1"></path>
                  <path d="M16 18v-3"></path>
                </svg>
                <CardTitle>Ozon Tedavisi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ozon gazının tıbbi amaçlarla kullanıldığı, bağışıklığı güçlendiren tedavi yöntemi.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ozon-tedavisi">Daha Fazla Bilgi</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-600"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
                <CardTitle>Refleksoloji</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  El ve ayaklardaki sinir uçlarına bası uygulayarak organlardaki bozuklukları iyileştiren yöntem.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/refleksoloji">Daha Fazla Bilgi</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
                <CardTitle>Apiterapi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Arı ürünlerinin (bal, propolis, arı sütü, arı zehiri) tedavi amaçlı kullanımı.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/apiterapi">Daha Fazla Bilgi</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-600"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                </svg>
                <CardTitle>Hipnoz</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bilinçaltına erişim sağlayan, odaklanmış dikkat ve telkin alabilirlik durumu ile tedavi.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/hipnoz">Daha Fazla Bilgi</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M9 12h.01"></path>
                  <path d="M15 12h.01"></path>
                  <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path>
                  <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path>
                </svg>
                <CardTitle>Homeopati</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "Benzeri benzerle tedavi etme" prensibine dayanan, yüksek oranda seyreltilmiş maddelerle tedavi.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/homeopati">Daha Fazla Bilgi</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-rose-600"
                >
                  <path d="M6 9v12"></path>
                  <path d="M18 9v12"></path>
                  <path d="M6 9a6 6 0 0 1 6-6 6 6 0 0 1 6 6"></path>
                  <path d="M6 9a6 6 0 0 0 6 6 6 6 0 0 0 6-6"></path>
                </svg>
                <CardTitle>Mezoterapi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Vitamin ve ilaç karışımlarının derinin orta tabakasına enjekte edildiği tedavi yöntemi.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/mezoterapi">Daha Fazla Bilgi</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-600"
                >
                  <path d="M19 7.5c-1.333-3-3.667-4.5-7-4.5-5 0-8 2.5-8 9 0 4.5 2 8 7 11 .5.5 1 0 1 0"></path>
                  <path d="M19 15c1 1 2 3 2 5"></path>
                  <path d="M12 19c-2 0-4 1-4 3"></path>
                </svg>
                <CardTitle>Larva Tedavisi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Steril sinek larvalarının kronik ve enfekte yaraların tedavisinde kullanıldığı biyolojik yöntem.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/larva-tedavisi">Daha Fazla Bilgi</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mt-12 rounded-lg bg-muted p-6">
          <h2 className="mb-4 text-2xl font-bold">Neden Alternatif Tıp?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-lg font-medium">Doğal Tedavi</h3>
              <p className="text-sm text-muted-foreground">
                Kimyasal ilaçlar yerine doğal yöntemlerle tedavi imkanı sunar.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">Bütünsel Yaklaşım</h3>
              <p className="text-sm text-muted-foreground">
                Sadece hastalığı değil, kişinin tüm sağlık durumunu ele alır.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">Kültürel Miras</h3>
              <p className="text-sm text-muted-foreground">
                Yüzyıllardır Anadolu'da uygulanan geleneksel tedavi yöntemlerini yaşatır.
              </p>
            </div>
          </div>
        </section>
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
