package com.medical.HospitalManagement.ui;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

public class FrontEnd extends Application {
    @Override
    public void start(Stage primaryStage) {
        WebView webView = new WebView();
        webView.getEngine().load("http://localhost:8080/index.html");

        Scene scene = new Scene(webView, 800, 600);
        primaryStage.setScene(scene);
        primaryStage.setTitle("Hybrid Desktop App");
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}