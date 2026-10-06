import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { NavItems } from 'types'
import ClientOnly from './ClientOnly'
import CloseIcon from './CloseIcon'
import OriginalDrawer from './Drawer'

type NavigationDrawerProps = PropsWithChildren<{ items: NavItems }>

export default function NavigationDrawer({ children, items }: NavigationDrawerProps) {
  return (
    <OriginalDrawer.Drawer>
      <Wrapper>
        <ClientOnly>
          <OriginalDrawer.Target openClass="drawer-opened" closedClass="drawer-closed">
            <div className="my-drawer">
              <div className="my-drawer-container">
                <DrawerCloseButton />
                <NavItemsList items={items} />
              </div>
            </div>
          </OriginalDrawer.Target>
        </ClientOnly>
      </Wrapper>
      {children}
    </OriginalDrawer.Drawer>
  )
}

function NavItemsList({ items }: NavigationDrawerProps) {
  const { close } = OriginalDrawer.useDrawer()
  const router = useRouter()

  useEffect(() => {
    function handleRouteChangeComplete() {
      close()
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => router.events.off('routeChangeComplete', handleRouteChangeComplete)
  }, [close, router])

  return (
    <ul>
      <MobileSearchItem>
        <MobileSearchButton
          onClick={() => {
            close();
            window.dispatchEvent(new CustomEvent('open-search-modal'));
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search SAGE Website
        </MobileSearchButton>
      </MobileSearchItem>
      {items.map((singleItem, idx) => {
        return (
          <NavItem key={idx}>
            <NextLink href={singleItem.href}>{singleItem.title}</NextLink>
            {singleItem.subItems && (
              <SubList>
                {singleItem.subItems.map((sub, sIdx) => (
                  <SubItem key={sIdx}>
                    {sub.href ? (
                      <NextLink href={sub.href}>{sub.title}</NextLink>
                    ) : (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          close();
                          sub.onClick?.();
                        }}
                      >
                        {sub.title}
                      </a>
                    )}
                  </SubItem>
                ))}
              </SubList>
            )}
          </NavItem>
        )
      })}
    </ul>
  )
}

function DrawerCloseButton() {
  const ref = useRef(null)
  const a11yProps = OriginalDrawer.useA11yCloseButton(ref)

  return <CloseIcon className="close-icon" _ref={ref} {...a11yProps} />
}

const Wrapper = styled.div`
  .my-drawer {
    width: 100%;
    height: 100%;
    z-index: var(--z-drawer);
    background: rgb(var(--background));
    transition: margin-left 0.3s cubic-bezier(0.82, 0.085, 0.395, 0.895);
    overflow-y: auto;
  }

  .my-drawer-container {
    position: relative;
    min-height: 100%;
    margin: auto;
    max-width: 70rem;
    padding: 6rem 1.2rem 4rem 1.2rem;
  }

  .close-icon {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  .drawer-closed {
    margin-left: -100%;
  }

  .drawer-opened {
    margin-left: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    & > *:not(:last-child) {
      margin-bottom: 2.2rem;
    }
  }
`

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
    display: block;
    color: currentColor;
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 0.4rem 1rem;
    text-align: center;
  }
`

const SubList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.6rem;
  gap: 0.4rem;
`

const SubItem = styled.div`
  a {
    font-size: 1.5rem !important;
    color: rgb(var(--brandBlue, 0, 106, 173)) !important;
    text-transform: none !important;
    padding: 0.2rem 0.8rem !important;
    font-weight: 600 !important;
  }
`

const MobileSearchItem = styled.li`
  width: 100%;
  max-width: 32rem;
  margin-bottom: 2rem !important;
`

const MobileSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1.2rem 2rem;
  background: rgb(var(--primary, 251, 107, 49));
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(251, 107, 49, 0.35);

  svg {
    width: 2rem;
    height: 2rem;
  }
`
