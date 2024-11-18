import './globals.css';

interface LayoutProps {

  children: React.ReactNode

}

export default function RootLayout({children} : LayoutProps){

  return (

    <html>
      <head>

      </head>
      <body>
        
        {children}

      </body>
    </html>

  )

}