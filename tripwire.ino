const int pinPiezo = 0;
const int pinSwitch = 3;
const int pinLed = 7;

int switchState = 0;
int previousState = 0;

unsigned long previousMillis = 0; // last time update
const long interval = 1000 * 60 * 5; // interval at which to do something (milliseconds)

void setup() {
  pinMode(pinLed, OUTPUT);
  pinMode(pinSwitch, INPUT);
}

void melody() {
    tone(pinPiezo, 50);
    delay(100);
    tone(pinPiezo, 200);
    delay(100);
    tone(pinPiezo, 500);
    delay(100);
    noTone(pinPiezo);
}

void loop() {
  previousState = switchState;
  switchState = digitalRead(pinSwitch);

  unsigned long currentMillis = millis();

  if(currentMillis - previousMillis > interval) {
    previousMillis = currentMillis;
    Particle.publish("doorLastChecked", Time.timeStr(), 1, PRIVATE);
  }

  if (switchState == HIGH) {
    digitalWrite(pinLed, LOW);

    if(previousState != switchState) {
      Particle.publish("door", "closed", 1, PRIVATE);
      /*melody();*/
      delay(2000);
    }
  }

  else {
    digitalWrite(pinLed, HIGH);
    if(previousState != switchState) {
      Particle.publish("door", "open", 1, PRIVATE);
      /*melody();*/
      delay(2000);
    }
  }
}
