import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { SessionProvider } from "./components/SessionProvider";
import { NavMenu } from "./components/NavMenu";
import { SignInScreen } from "./components/SignInScreen";
import { UnauthorizedUser } from "./components/UnauthorizedUser";

const inter = Inter({ subsets: ["latin"] });
// TODO move somewhere else
const authorizedUsers = ["aodhaganmurphy@gmail.com"];
const isAuthorized = (email?: string | null) =>
  email && authorizedUsers.includes(email);

export const metadata: Metadata = {
  title: "Loyal",
  description: "Simple app to store your loyalty cards",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavMenu />
          <main className="h-screen flex flex-col">
            {session ? (
              <>
                {isAuthorized(session?.user?.email) ? (
                  children
                ) : (
                  <UnauthorizedUser />
                )}
              </>
            ) : (
              <SignInScreen />
            )}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
