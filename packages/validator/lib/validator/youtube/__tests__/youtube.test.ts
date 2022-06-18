import { ValidatorYoutube } from '..';

describe('string youtube test', () => {
  test('"https://www.youtube.com" control', () => {
    expect(
      ValidatorYoutube('https://www.youtube.com/watch?v=DFYRQ_zQ-gk')
    ).toBeTruthy();
    expect(
      ValidatorYoutube(
        'https://www.youtube.com/watch?v=DFYRQ_zQ-gk&feature=featured'
      )
    ).toBeTruthy();
    expect(
      ValidatorYoutube('https://www.youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('https://www.youtube.com/embed/DFYRQ_zQ-gk?autoplay=1')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('https://www.youtube.com/embed/DFYRQ_zQ-gk')
    ).toBeTruthy();
  });

  test('"http://www.youtube.com" control', () => {
    expect(
      ValidatorYoutube('http://www.youtube.com/watch?v=DFYRQ_zQ-gk')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('http://www.youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('http://www.youtube.com/embed/DFYRQ_zQ-gk?autoplay=1')
    ).toBeTruthy();
  });

  test('"//www.youtube.com" control', () => {
    expect(
      ValidatorYoutube('//www.youtube.com/watch?v=DFYRQ_zQ-gk')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('//www.youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('//www.youtube.com/embed/DFYRQ_zQ-gk?autoplay=1')
    ).toBeTruthy();
  });

  test('"www.youtube.com" control', () => {
    expect(
      ValidatorYoutube('www.youtube.com/watch?v=DFYRQ_zQ-gk')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('www.youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('www.youtube.com/embed/DFYRQ_zQ-gk?autoplay=1')
    ).toBeTruthy();
  });

  test('"https://youtube.com" control', () => {
    expect(
      ValidatorYoutube('https://youtube.com/watch?v=DFYRQ_zQ-gk')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('https://youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('https://youtube.com/embed/DFYRQ_zQ-gk?autoplay=1')
    ).toBeTruthy();
  });

  test('"http://youtube.com" control', () => {
    expect(
      ValidatorYoutube('http://youtube.com/watch?v=DFYRQ_zQ-gk')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('http://youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('http://youtube.com/embed/DFYRQ_zQ-gk?autoplay=1')
    ).toBeTruthy();
  });

  test('"//youtube.com" control', () => {
    expect(ValidatorYoutube('//youtube.com/watch?v=DFYRQ_zQ-gk')).toBeTruthy();
    expect(
      ValidatorYoutube('//youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('//youtube.com/embed/DFYRQ_zQ-gk?autoplay=1')
    ).toBeTruthy();
  });

  test('"youtube.com" control', () => {
    expect(ValidatorYoutube('youtube.com/watch?v=DFYRQ_zQ-gk')).toBeTruthy();
    expect(
      ValidatorYoutube('youtube.com/v/DFYRQ_zQ-gk?fs=1&hl=en_US')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('youtube.com/embed/DFYRQ_zQ-gk?autoplay=1')
    ).toBeTruthy();
  });

  test('"m.youtube.com" control', () => {
    expect(
      ValidatorYoutube('https://m.youtube.com/watch?v=DFYRQ_zQ-gk')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('http://m.youtube.com/watch?v=DFYRQ_zQ-gk')
    ).toBeTruthy();
    expect(
      ValidatorYoutube('//m.youtube.com/watch?v=DFYRQ_zQ-gk')
    ).toBeTruthy();
    expect(ValidatorYoutube('m.youtube.com/watch?v=DFYRQ_zQ-gk')).toBeTruthy();
  });

  test('"youtu.be" control', () => {
    expect(ValidatorYoutube('https://youtu.be/DFYRQ_zQ-gk?t=120')).toBeTruthy();
    expect(ValidatorYoutube('https://youtu.be/DFYRQ_zQ-gk')).toBeTruthy();
    expect(ValidatorYoutube('http://youtu.be/DFYRQ_zQ-gk')).toBeTruthy();
    expect(ValidatorYoutube('//youtu.be/DFYRQ_zQ-gk')).toBeTruthy();
    expect(ValidatorYoutube('youtu.be/DFYRQ_zQ-gk')).toBeTruthy();
  });

  test('empty string', () => {
    expect(ValidatorYoutube('')).toBeFalsy();
  });

  test('null control', () => {
    expect(ValidatorYoutube(null)).toBeFalsy();
    expect(ValidatorYoutube(null)).not.toBeNull();
  });
});
