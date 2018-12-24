<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Casestudies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('casestudies', function (Blueprint $table) {
        $table->increments('id');
        $table->string('title');
        $table->string('doctor_name');
        $table->text('case_description');
        $table->text('case_solution');
        $table->string('pharmacy_name');
        $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
