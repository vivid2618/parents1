export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <title>부모의 문제해결력 자가진단 체크리스트</title>
        <meta name="description" content="부모의 문제해결력을 진단하고 개선방안을 제시하는 체크리스트입니다." />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
