int threshold = 800;
int reading = 0;
float BPM = 0.0;
bool ignoreReading = false;
bool firstPulseDetected = false;
unsigned long firstPulseTime = 0;
unsigned long secondPulseTime = 0;
unsigned long pulseInterval = 0;

float bpmArray[2] = {0, 0};

void setup() {
  Serial.begin(9600);
}

void loop() {

  reading = analogRead(0);

  // Heart beat leading edge detected.
  if (reading > threshold && ignoreReading == false) {
    if (firstPulseDetected == false) {
      firstPulseTime = millis();
      firstPulseDetected = true;
    } else {
      secondPulseTime = millis();
      pulseInterval = secondPulseTime - firstPulseTime;
      firstPulseTime = secondPulseTime;
    }
    ignoreReading = true;
  }

  // Heart beat trailing edge detected.
  if (reading < threshold) {
    ignoreReading = false;
  }
  int bpmTemp = (1.0 / pulseInterval) * 60.0 * 1000;

  bpmArray[1] = bpmArray[0];
  bpmArray[0] = bpmTemp;

  BPM = (bpmArray[1] + bpmArray[0]) / 2.0;


  Serial.println(BPM);
  Serial.flush();

  delay(100);
}
