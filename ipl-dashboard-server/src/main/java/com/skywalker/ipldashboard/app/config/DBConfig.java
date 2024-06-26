package com.skywalker.ipldashboard.app.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.io.File;

@Configuration
public class DBConfig {

    private static final String DB_CONFIG_PATh = System.getProperty("user.name") +"/config2.yaml";

//    @Bean
//    public DataSource getDataSource(){
//
//        DatasourceParam dsp = null;
//        try {
//            LOGGER.info(DB_CONFIG_PATh);
//            ObjectMapper mapper = new ObjectMapper(new YAMLFactory());
//            dsp = mapper.readValue(new File(DB_CONFIG_PATh), DatasourceParam.class);
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
//
//        return DataSourceBuilder
//                .create()
//                .url(dsp.getUrl())
//                .username(dsp.getUsername())
//                .password(dsp.getPassword())
//                .build();
//    }
}
