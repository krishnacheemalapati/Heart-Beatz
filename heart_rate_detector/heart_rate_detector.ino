

int threshold = 800;
int reading = 0;
float BPM = 0.0;
bool ignoreReading = false;
bool firstPulseDetected = false;
unsigned long firstPulseTime = 0;
unsigned long secondPulseTime = 0;
unsigned long pulseInterval = 0;


const int BUTTON_PIN = A1;


float bpmArray[2] = { 0, 0 };

void setup() {
  Serial.begin(9600);
  pinMode(BUTTON_PIN, INPUT);
}


int button_count = 0;
// int note_count = 0;

void loop() {
  bool button = digitalRead(BUTTON_PIN);
  if (button == true) {
    if (button_count == 0) {
      Serial.println("ALIVE");
    }
    button_count++;
  }

  if (button_count == 2) {
    Serial.print("DEAD");
    Serial.end();
    exit(0);
  }

  if (button_count == 1) {
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

    // Calculating beats per min
    bpmArray[1] = bpmArray[0];
    bpmArray[0] = bpmTemp;

    BPM = (bpmArray[1] + bpmArray[0]) / 2.0;

    Serial.println(BPM);
    Serial.flush();

    // if (note_count % 10 == 0) {
    //   int bpm_int = int(BPM * 10);
    //   tone(3, bpm_int, 500);
    //   noTone(3);
    // }
    // note_count++;
  }


  delay(100);
}
