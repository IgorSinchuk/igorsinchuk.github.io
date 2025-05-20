document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const icons = {
    github: {
      light: 'images/icons/github-light.png',
      dark: 'images/icons/github-dark.png'
    },
    linkedin: {
      light: 'images/icons/linkedin-light.png',
      dark: 'images/icons/linkedin-dark.png'
    },
    facebook: {
      light: 'images/icons/facebook-light.png',
      dark: 'images/icons/facebook-dark.png'
    },
    email: {
      light: 'images/icons/email-light.png',
      dark: 'images/icons/email-dark.png'
    }
  };

  const themeIcons = {
    light: 'images/icons/moon.png', // для світлої теми – показати місяць (перейти на темну)
    dark: 'images/icons/sun.png'    // для темної теми – показати сонце (перейти на світлу)
  };

  function setIcons(theme) {
    for (const key in icons) {
      const icon = document.getElementById(`${key}-icon`);
      if (icon) icon.src = icons[key][theme];
    }
    themeIcon.src = themeIcons[theme];
  }


  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
    setIcons(theme);
  }
  
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme); // ✅ Тут і викликається, щоб одразу все оновити
  
  toggleButton.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
