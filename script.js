function format (number) {
  var string  = number.toString();
  var reverse = string.split("").reverse().join("");
  var string = "";
  for (var i = 0; i < reverse.length; i++) {
    string += reverse[i];
    if (i % 3 == 2 && i != reverse.length-1) {
      string += ",";
    }
  };
  string = string.split("").reverse().join("");
  return string;
};

const $timestamp = Date.now();

function multiply_seconds (multiplier) {
  var milliseconds = Date.now() - $timestamp;
  var multiplier_digits = Math.floor(Math.log10(multiplier));
  var tail_length       = multiplier_digits - 3;
  var tail = [];
  for (var i = 0; i < tail_length; i++) {
    tail.push(Math.floor(Math.random() * 10));
  };
  var tail = tail.join("");
  var string = milliseconds.toString() + tail;
  return string;
};

$( document ).ready(function() {
  const star                   = 10e20;
  const watt_per_star          = 10e26;
  const flops_per_star         = 10e47;
  const operation_per_lifetime = 10e27;
  const person                 = 7500000000;
  const second                 = 10e18;

  const watt                = watt_per_star * star;
  const kwh                 = watt * (2.778 * 10e-7);
  const flops               = flops_per_star * star;
  const lifetime_per_second = flops / operation_per_lifetime;
  const lifetime_per_second_per_person = lifetime_per_second / person;
  const joule               = watt * second;
  const lifetime_per_person = lifetime_per_second_per_person * second;

  setInterval(function () {
    var accumulative_kwh       = multiply_seconds(kwh);
    var accumulative_watt      = multiply_seconds(watt);
    var accumulative_lifetimes = multiply_seconds(lifetime_per_second_per_person);
    var chance                 = 1 / accumulative_lifetimes;
    var proportion             = accumulative_watt / joule;
    var wager                  = 1 / lifetime_per_person;

    $("#volume").text(format(accumulative_kwh));
    $("#lifetimes").text(format(accumulative_lifetimes));
    $("#chance").text(chance.toFixed(34));
    $("#proportion").text(proportion.toFixed(19));
    $("#wager").text(wager.toFixed(50));
  }, 16);
});
