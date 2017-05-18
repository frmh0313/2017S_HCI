#include <Servo.h>
#include <DHT11.h>

// eye control using potentiometer

int potPin = A0;
int ledPin = 11;
int brightness = 0;

// for handshaking
Servo arm;
int fsrPin = A2;
int pos = 45;
int pressure = 0;

// for ultrasonic sensor
int echoPin = 12;
int trigPin = 13;

// for DHT11 sensor
int dhtPin = 4;
DHT11 dht11(dhtPin);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  
  arm.attach(5);
  arm.write(45);
}

void loop() {
  // eyes
  
  brightness = analogRead(potPin);
  brightness = map(brightness, 0, 1023, 0, 180);
  analogWrite(ledPin, brightness);

  //handshake
  pressure = analogRead(fsrPin);
  Serial.print("pressure: ");
  Serial.println(pressure);
  if (pressure >= 128) {
    for(pos=45;pos<135;pos+=1) {
      arm.write(pos);
      delay(10);
    }
  }

  if (pressure <= 64) {
    while(pos >= 45) {
      pos-=1;
      arm.write(pos);
      delay(10);
    }
  }

 
  //ultrasonic sensor
  float duration;
  float distance = 0;
  digitalWrite(trigPin, HIGH);
  delay(10);
  digitalWrite(trigPin, LOW);

  if(digitalRead(echoPin)==LOW) {
//    distance = (float)pulseIn(echoPin, HIGH)/29/2;
    duration = pulseIn(echoPin, HIGH);
    distance = ((float)(340*duration) / 10000) / 2;
  }
  else {
    pinMode(echoPin, OUTPUT);
    digitalWrite(echoPin, LOW);
    pinMode(echoPin, INPUT);
  }
   Serial.print("distance: ");
    Serial.print(distance);
    Serial.println();
  if (distance < 30) {
    // sensing temperature and humidity using DHT11 sensor. 
 int err;
 float temperature, humidity;
 if ((err=dht11.read(humidity, temperature))==0) {
    Serial.print("temperature: ");
    Serial.print(temperature);
    Serial.print(" humidity: ");
    Serial.print(humidity);
    Serial.println();
  } else {
    Serial.println();
    Serial.print("Error No : ");
    Serial.print(err);
    Serial.println();
  } 

    if (temperature > 27.00 || humidity > 70.00) {
      arm.write(45);
      for(int i=0;i<5;i+=1) {
        digitalWrite(ledPin, HIGH);
        for(pos=45;pos<92;pos +=2) {
          arm.write(pos);
          delay(10);
       }
      delay(300);
      digitalWrite(ledPin, LOW);
      for(pos=91;pos>=45;pos-=2) {
        arm.write(pos);
        delay(10);
       }
       
    }
  }
  delay(1000);
  }

delay(1000);
}
