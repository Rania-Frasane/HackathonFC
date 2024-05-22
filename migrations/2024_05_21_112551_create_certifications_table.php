<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('certifications', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('domaines_id')->unsigned();
            $table->bigInteger('Intervenants_id')->unsigned();
            $table->string('intiltule_certification', 45)->nullable();
            $table->string('organisme_certification', 45)->nullable();
            $table->string('type_certification', 45)->nullable();
            $table->timestamps();
            $table->foreign('domaines_id')->references('id')->on('domaines');
            $table->foreign('Intervenants_id')->references('id')->on('intervenants');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certifications');
    }
};
