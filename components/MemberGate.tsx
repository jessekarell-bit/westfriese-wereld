'use client'

interface MemberGateProps {
  children: React.ReactNode
}

/** Toegangspoort verwijderd: content is altijd zichtbaar. */
export default function MemberGate({ children }: MemberGateProps) {
  return <>{children}</>
}
