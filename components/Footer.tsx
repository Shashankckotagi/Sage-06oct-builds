import NextLink from 'next/link';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Explore',
    items: [
      { title: 'Courses', href: '/courses' },
      { title: 'Tutorials', href: '/courses#tutorials' },
      { title: 'Workshops', href: '/services#workshops' },
      { title: 'Training Programs', href: '/services#training' },
    ],
  },
  {
    title: 'Work With Us',
    items: [
      { title: 'Consulting Services', href: '/services#consulting' },
      { title: 'Customized Courses', href: '/services#custom' },
      { title: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'About SAGE', href: '/about' },
      { title: 'Global Team', href: '/about#team' },
      { title: 'News & Articles', href: '/blog' },
      { title: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <a href="https://www.linkedin.com/company/shastry-associates" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#0A66C2" />
                <path fillRule="evenodd" clipRule="evenodd" d="M11.5 13H15V24H11.5V13ZM13.25 8.75C12.1454 8.75 11.25 9.64543 11.25 10.75C11.25 11.8546 12.1454 12.75 13.25 12.75C14.3546 12.75 15.25 11.8546 15.25 10.75C15.25 9.64543 14.3546 8.75 13.25 8.75ZM17.5 13H20.86V14.5H20.91C21.38 13.61 22.53 12.67 24.25 12.67C27.8 12.67 28.5 15.01 28.5 18.06V24H25V18.52C25 17.21 24.97 15.53 23.18 15.53C21.36 15.53 21.08 16.95 21.08 18.42V24H17.5V13Z" fill="white" />
              </svg>
            </a>

            <a href="https://www.twitter.com/shastryassoc" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#1DA1F2" />
                <path d="M25.5 12.64C24.8 12.95 24.05 13.16 23.26 13.25C24.07 12.77 24.69 12 24.98 11.09C24.22 11.54 23.38 11.87 22.48 12.05C21.76 11.28 20.74 10.8 19.61 10.8C17.44 10.8 15.68 12.56 15.68 14.73C15.68 15.04 15.71 15.34 15.78 15.63C12.51 15.47 9.6 13.9 7.65 11.51C7.31 12.09 7.12 12.77 7.12 13.49C7.12 14.85 7.81 16.05 8.86 16.75C8.22 16.73 7.62 16.55 7.09 16.26V16.31C7.09 18.21 8.44 19.8 10.23 20.16C9.9 20.25 9.55 20.3 9.19 20.3C8.94 20.3 8.69 20.28 8.45 20.23C8.95 21.79 10.4 22.93 12.12 22.96C10.77 24.02 9.07 24.65 7.22 24.65C6.9 24.65 6.59 24.63 6.28 24.59C8.02 25.71 10.09 26.37 12.31 26.37C19.55 26.37 23.51 20.38 23.51 15.19C23.51 15.02 23.51 14.85 23.5 14.68C24.27 14.13 24.95 13.43 25.5 12.64Z" fill="white" />
              </svg>
            </a>

            <a href="https://www.facebook.com/shastryassociates" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#1877F2" />
                <path d="M21.5 18.5L22 15H18.5V12.75C18.5 11.8 19 10.9 20.5 10.9H22V8.04C22 8.04 20.64 7.8 19.34 7.8C16.63 7.8 14.85 9.46 14.85 12.45V15H11.75V18.5H14.85V27H18.5V18.5H21.5Z" fill="white" />
              </svg>
            </a>
          </ShareBar>
          <Copyright>&copy; {new Date().getFullYear()} Shastry Associates Global Enterprises (SAGE). All rights reserved.</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding-top: 4rem;
  padding-bottom: 3rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.h4`
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  letter-spacing: 0.02em;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 0.8rem;
  }

  ${media('<=tablet')} {
    flex: 0 45%;
    margin-right: 1rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.4rem;

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: rgb(var(--skyBlue, 53, 169, 239));
    }
  }
`;

const ShareBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Copyright = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.6);

  ${media('<=tablet')} {
    margin-top: 1.5rem;
    text-align: center;
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
