import { relativeTime } from '../relativeTime';

describe('relativeTime hour', () => {
  test('should return correct hour difference', () => {
    expect(
      relativeTime('2022-12-01 10:00', '2022-12-01 22:00', 'hour', {
        lang: 'pl',
      })
    ).toBe('12 godzin temu');
  });
});

describe('relativeTime day', () => {
  test('should return correct day difference', () => {
    expect(
      relativeTime('2022-11-01 10:00', '2022-12-01 22:00', 'day', {
        lang: 'en',
      })
    ).toBe('30 days ago');
  });
});
