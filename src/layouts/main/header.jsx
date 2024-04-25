import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { NavBasicDesktop } from 'src/components/nav-basic';

import NavMobile from './nav/mobile';
import { auth } from '../../../firebase';
import { HEADER } from '../config-layout';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';


// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();
  const offset = useOffSetTop();
  const mdUp = useResponsive('up', 'md');
  const [user, setUser] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { uid } = authUser;
        setUser(uid);
        console.log('user is signed in');
      } else {
        setUser('');
        console.log('user is signed out');
      }
    });
  }, []);

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        <Logo />

        <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener">
          <Label
            color="info"
            sx={{
              ml: 0.5,
              px: 0.5,
              top: -14,
              left: 60,
              height: 20,
              fontSize: 11,
              cursor: 'pointer',
              position: 'absolute',
            }}
          >
            v2.4.0
          </Label>
        </Link>
      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <NavBasicDesktop
            slotProps={{
              rootItem: {
                '& .icon': { display: 'none' },
              },
            }}
            data={[
              {
                title: 'Home',
                icon: <Iconify icon="solar:home-2-bold-duotone" />,
                path: '/',
              },
              { title: 'About us', path: '/about' },
              {
                title: 'Pages1',
                path: '/pages1',
                icon: <Iconify icon="solar:file-bold-duotone" />,
                children: [
                  { title: 'FAQs', path: '/pagespages/faqs' },
                  { title: 'Pricing', path: '/pagespages/pricing' },
                ],
              },
              {
                title: 'Pages2',
                path: '/pages2',
                icon: <Iconify icon="solar:file-bold-duotone" />,
                children: [
                  { title: 'Payment', path: '/pagespages/payment' },
                  { title: 'Maintenance', path: '/pages/maintenance' },
                ],
              },
              {
                title: 'Docs',
                icon: <Iconify icon="solar:notebook-bold-duotone" />,
                path: paths.docs,
              },
            ]}
          />
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
      </>

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
        <Stack spacing={1} direction="row" alignItems="center">
          {/* <Searchbar /> */}

          <IconButton
            component={RouterLink}
            href={user ? 'e-commerce/account/personal' : '/auth/login-background'}
            size="small"
            color="inherit"
            sx={{ p: 0 }}
          >
            <Iconify icon="carbon:user" width={24} />
          </IconButton>

          <SettingsButton />
        </Stack>
        {!user && (
          <Button
            variant="contained"
            color="inherit"
            href='/auth/login-background'
            rel="noopener"
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
            }}
          >
            Se connecter
          </Button>
        )}

        {/* <Button
          variant="contained"
          color="inherit"
          href='https://play.google.com/store/apps/details?id=com.monremede&pcampaignid=web_share'
          target="_blank"
          rel="noopener"
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          Téléchargez
        </Button> */}
      </Stack>

      {!mdUp &&
        <NavMobile
          data={[
            {
              title: 'Home',
              icon: <Iconify icon="solar:home-2-bold-duotone" />,
              path: '/',
            },
            { title: 'About us', path: '/about' },
            {
              title: 'Pages1',
              path: '/pages1',
              icon: <Iconify icon="solar:file-bold-duotone" />,
              children: [
                { title: 'FAQs', path: '/pagespages/faqs' },
                { title: 'Pricing', path: '/pagespages/pricing' },
              ],
            },
            {
              title: 'Pages2',
              path: '/pages2',
              icon: <Iconify icon="solar:file-bold-duotone" />,
              children: [
                { title: 'Payment', path: '/pagespages/payment' },
                { title: 'Maintenance', path: '/pages/maintenance' },
              ],
            },
            {
              title: 'Docs',
              icon: <Iconify icon="solar:notebook-bold-duotone" />,
              path: paths.docs,
            },
          ]}
        />
      }
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
