import CustomBtn from '~/components/CustomBtn.vue'

export default {
  component: CustomBtn,
  title: 'Components/CustomBtn',
};

export const Default = () => ({
  components: { CustomBtn },
  template: '<CustomBtn title="Button" class="bg-orange-400 hover:bg-orange-500"></CustomBtn>',
});
export const Simple = () => ({
  components: { CustomBtn },
  template: '<CustomBtn title="Button" customStyle="simple"></CustomBtn>',
});
export const Pill = () => ({
  components: { CustomBtn },
  template: '<CustomBtn title="Button" customStyle="pill"></CustomBtn>',
});
export const Outline = () => ({
  components: { CustomBtn },
  template: '<CustomBtn title="Button" customStyle="outline"></CustomBtn>',
});
export const Disable = () => ({
  components: { CustomBtn },
  template: '<CustomBtn title="Button" customStyle="disable"></CustomBtn>',
});
export const Icon = () => ({
  components: { CustomBtn },
  template:
    '<CustomBtn title="Button" customStyle="icon">' +
    '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
    '  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />\n' +
    '</svg>' +
    '</CustomBtn>',
});

